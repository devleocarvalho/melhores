import fs from 'fs';
import path from 'path';

const jsonPath = './produtos.json';
const publicImgDir = './public/img';

// 1. Carrega o JSON
if (!fs.existsSync(jsonPath)) {
  console.error('Erro: produtos.json não encontrado!');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// 2. Garante que a pasta public/img existe
if (!fs.existsSync(publicImgDir)) {
  fs.mkdirSync(publicImgDir, { recursive: true });
  console.log('Pasta public/img criada.');
}

// 3. Extrai todos os caminhos de imagem (suporta objeto ou array)
const produtos = Array.isArray(data) 
  ? data.flatMap(cat => cat.produtos || []) 
  : Object.values(data).flat();

produtos.forEach(p => {
  if (p.img && p.img.startsWith('/img/')) {
    const fileName = p.img.replace('/img/', '');
    const filePath = path.join(publicImgDir, fileName);
    
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, ''); // Cria arquivo vazio
      console.log(`Arquivo criado: ${filePath}`);
    }
  }
});