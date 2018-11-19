const PessoaModel = (sequelize, DataTypes) => {
    const Pessoa = sequelize.define('pessoa', {
        nome: DataTypes.STRING,
        cargo: DataTypes.STRING,
        nascimento: DataTypes.DATE
    })  
    return Pessoa  
}

module.exports = PessoaModel