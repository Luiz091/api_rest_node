# Api Rest :computer:


Projeto desenvolvido utilizando as tecnologias e serviços abaixo:
- **NodeJS**
- **Express**
- **MongoDB** - Utilizado a versão Cloud (MongoDB Atlas).
- **JWT** 
- **Postman**

Feito a autenticação de users através de **Token** com **JWT**. Configurações de recuperação de senha com **NodeMailer**.

### 🎲 Rodando a Api

$ git clone https://github.com/Luiz091/api_rest_node.git

$ cd api_rest_node

$ npm install

$ node src/index.js

***IMPORTANTE!**
Caso tenha **MongoDB instalado**, realize a alteração da linha de conexão com o DB (**index.js** da pasta **Database**) para:
*mongoose.connect('mongodb://localhost/nomedoDB', { useMongoClient: true });*
**Ou** se preferir, utilize o serviço Cloud disponibilizado pela MongoDB em: https://www.mongodb.com/cloud/atlas .

**Contribuições e sugestões são bem-vindas 💪**

**- Luiz Alves :computer:**
