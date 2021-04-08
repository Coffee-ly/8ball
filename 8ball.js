const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const fs = require('fs');

module.exports = class EightBallCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'COMMAND_NAME',
        // aliases can be customizable
      aliases: ['ALIAS_1', 'ALIAS_2'],
      group: 'COMMAND_GROUP',
      memberName: 'COMMAND_MEMBER_NAME',
      description: 'COMMAND_DESCRIPTION',
      //args can be customizable
      args: [
        {
          key: 'text',
          prompt: 'What do you want to ask?',
          type: 'string'
        }
      ]
    });
  }

  run(message) {
    const ballAnswers = fs.readFileSync('assets/json/8-ball.json', 'utf8');
    const ballArray = JSON.parse(ballAnswers).answers;

    const randomAnswer =
      ballArray[Math.floor(Math.random() * ballArray.length)];

    const answerEmbed = new MessageEmbed()
      .setAuthor('Magic 8 Ball', 'https://i.imgur.com/HbwMhWM.png')
      .setDescription(randomAnswer.text)
      .setColor('#000000')
      .setTimestamp()
    return message.channel.send(answerEmbed);
  }
};
