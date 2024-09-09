
const { Client, EmbedBuilder , ChannelType, PermissionFlagsBits,  ButtonBuilder, ActionRowBuilder , UserSelectMenuBuilder , AttachmentBuilder ,  TextInputBuilder, TextInputStyle , ModalBuilder , SelectMenuBuilder } = require("discord.js");
const client = require("../../index");
const config = require("../../config/config.js");
const fs = require('fs');

const axios = require('axios');

const mongoose = require('mongoose');


module.exports = {
  name: "interactionCreate"
};

async function handleCommand(interaction) {
const colors = require("../../models/modcolor");
    const find = await colors.findOne({
      guildId: interaction.guild.id,
    });
  const command = client.slash_commands.get(interaction.commandName)
    || client.user_commands.get(interaction.commandName)
    || client.message_commands.get(interaction.commandName)
    || client.modals.get(interaction.customId);
  if (!command) {
    console.log(`Invalid interaction: ${interaction.commandName}`);
    return;
  }
   if (command.owner && command.owner == true) {
    if (!config.Users.OWNERS) return;

    const allowedUsers = [];

    config.Users.OWNERS.forEach(user => {
      const fetchedUser = interaction.guild.members.cache.get(user);
      if (!fetchedUser) return allowedUsers.push('*EGShop#Unknown*');
      allowedUsers.push(`${fetchedUser.user.tag}`);
    });

    if (!config.Users.OWNERS.some(ID => interaction.member.id.includes(ID))) {
      return interaction.reply({
        embeds: [
          new EmbedBuilder()
.setAuthor({ name: 'EG Tickets', iconURL: client.user.displayAvatarURL({ dynamic: true }) })
            .setDescription(`عذرًا، ولكن الأشخاص الذين مسموح لهم باستخدام هذا الأمر هم المسؤولون فقط! 🚫\Users :** ${allowedUsers.join(", ")}** `)
            .setColor(find.color)
        ], ephemeral: true
      });
    }
  }


  try {
    command.run(client, interaction, config);
  } catch (e) {
    console.error(e);
  }
}
const lastmoUsage = {};
const lastOpenUsage = {};





client.on("interactionCreate", async (interaction) => {
const clarm = require("../../models/claims");
const nufs = require("../../models/nuvs");
const Informs = require('../../models/modelmsg');
const colors = require("../../models/modcolor");
const tickets = require("../../models/ticketm");
const black = require("../../models/blacklis");
const rsgcxx = require("../../models/ratens");
const roleps = require("../../models/rolep");
const postps = require("../../models/postp");
const prooms = require("../../models/proom");
const adsps = require("../../models/adsp");
const buyofr = require("../../models/buyofr");
const upps = require("../../models/upp");
const upns = require("../../models/upn");
const staffs = require("../../models/modstaff");
    const finder = await staffs.findOne({
      guildId: interaction.guild.id,
    });
    const find = await colors.findOne({
      guildId: interaction.guild.id,
    });
	const bfind = await Informs.findOne({}).exec();
	const dcs = await nufs.findOne({}).exec();
const { buttonclosee,  buttonclime, bclose} = require('../../buttons/buttonComponents');
  if (interaction.isButton()) {
    const buttonID = interaction.customId;

if (buttonID === 'asks') {

  const fdc = await black.findOne({
        guildId: interaction.guild.id,
        user: interaction.user.id,
      });
     const rds = new EmbedBuilder()
            .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
    .setDescription('انت محظور من التذاكر')
      if (fdc) return interaction.reply({ embeds: [rds], ephemeral: true })
    const used = await tickets.findOne({
        user: interaction.user.id,
		prent:  finder.ask,
status: true,
      });

	       const us = new EmbedBuilder()
         .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
  .setDescription(`لديك تذكرة في هذا القسم بالفعل`)
     
      if (used) return interaction.reply({ embeds: [us] , ephemeral: true})

  const update = { $inc: { num: 1 } };
  const options = { new: true, upsert: true };
  const scccv = await nufs.updateMany({}, update, options);

	    const channel = await interaction.guild.channels.create({
          name: `ticket- ${dcs.num}`,
        type: ChannelType.GuildText,
         topic: `قسم دعم فني , Support for ${interaction.user.username} | ID: ${interaction.user.id}`,
   	parent: finder.ask,
        permissionOverwrites: [
{
id: finder.staff,
allow: [PermissionFlagsBits.ViewChannel,PermissionFlagsBits.SendMessages,PermissionFlagsBits.MentionEveryone],
},
{
id: interaction.member.id,
allow: [PermissionFlagsBits.ViewChannel,PermissionFlagsBits.SendMessages],
},
          {
id:   interaction.guild.id,
deny: [PermissionFlagsBits.ViewChannel],
},
],
      });



       const yt = new EmbedBuilder()
         .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
  .setDescription(`تذكرتك  ${channel}`)
     
    interaction.reply({ embeds: [yt] , ephemeral: true})
	   const askeadmin = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .setDescription(`${bfind.ask}`)
 channel.send({ content: `مرحبا بيك <@${interaction.user.id}>! \n<@&${finder.staff}> `, embeds: [askeadmin],components: [buttonclosee],ephemeral: false})

     new tickets({
        user: interaction.user.id,
        name: channel.name,
        guildId: interaction.guild.id,
        guildName: interaction.guild.name,
        channelId: channel.id,
status: true,
  prent: channel.parent.id, 
}).save();
       await channel.permissionOverwrites.edit(interaction.user.id, {
          SendMessages: true,
          ViewChannel: true,
          ReadMessageHistory: true,
        });
}
if (buttonID === 'ax') {
  const fdc = await black.findOne({
        guildId: interaction.guild.id,
        user: interaction.user.id,
      });
     const rds = new EmbedBuilder()
            .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
    .setDescription('انت محظور من التذاكر')
      if (fdc) return interaction.reply({ embeds: [rds], ephemeral: true })
    const used = await tickets.findOne({
        user: interaction.user.id,
		prent: "1154538382786052146",
		status: true,
      });

	       const us = new EmbedBuilder()
         .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
  .setDescription(`لديك تذكرة في هذا القسم بالفعل`)
     
      if (used) return interaction.reply({ embeds: [us] , ephemeral: true})

  const update = { $inc: { num: 1 } };
  const options = { new: true, upsert: true };
  const scccv = await nufs.updateMany({}, update, options);


	    const channel = await interaction.guild.channels.create({
          name: `ticket- ${dcs.num}`,
        type: ChannelType.GuildText,
         topic: `تقديم ادارة, Support for ${interaction.user.username} | ID: ${interaction.user.id}`,
    parent: "1154538382786052146",
        permissionOverwrites: [
{
id: finder.staff,
allow: [PermissionFlagsBits.ViewChannel,PermissionFlagsBits.SendMessages,PermissionFlagsBits.MentionEveryone],
},
{
id: interaction.member.id,
allow: [PermissionFlagsBits.ViewChannel,PermissionFlagsBits.SendMessages],
},
          {
id:   interaction.guild.id,
deny: [PermissionFlagsBits.ViewChannel],
},
],
      });


       const yt = new EmbedBuilder()
         .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
  .setDescription(`تذكرتك  ${channel}`)
     
    interaction.reply({ embeds: [yt] , ephemeral: true})

	   const askeadmin = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .setDescription(`${bfind.submita}`)
 channel.send({ content: `مرحبا بيك <@${interaction.user.id}>! \n<@&${finder.staff}>`, embeds: [askeadmin],components: [buttonclosee],ephemeral: false})

     new tickets({
        user: interaction.user.id,
        name: channel.name,
        guildId: interaction.guild.id,
        guildName: interaction.guild.name,
        channelId: channel.id,
status: true,
  prent: channel.parent.id, 
}).save();
}

if (buttonID === 'buyss') {

  const fdc = await black.findOne({
        guildId: interaction.guild.id,
        user: interaction.user.id,
      });
     const rds = new EmbedBuilder()
            .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
    .setDescription('انت محظور من التذاكر')
      if (fdc) return interaction.reply({ embeds: [rds], ephemeral: true })
    const used = await tickets.findOne({
        user: interaction.user.id,
	prent: finder.shop,
		status: true,
      });

	       const us = new EmbedBuilder()
         .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
  .setDescription(`لديك تذكرة في هذا القسم بالفعل`)
     
      if (used) return interaction.reply({ embeds: [us] , ephemeral: true})

  const update = { $inc: { num: 1 } };
  const options = { new: true, upsert: true };
  const scccv = await nufs.updateMany({}, update, options);


	    const channel = await interaction.guild.channels.create({
          name: `ticket- ${dcs.num}`,
        type: ChannelType.GuildText,
         topic: `قسم شراء , Support for ${interaction.user.username} | ID: ${interaction.user.id}`,
    parent: finder.shop,
        permissionOverwrites: [
{
id: finder.staff,
allow: [PermissionFlagsBits.ViewChannel,PermissionFlagsBits.SendMessages,PermissionFlagsBits.MentionEveryone],
},

{
id: interaction.member.id,
allow: [PermissionFlagsBits.ViewChannel,PermissionFlagsBits.SendMessages],
},
          {
id:   interaction.guild.id,
deny: [PermissionFlagsBits.ViewChannel],
},
],
      });



       const yt = new EmbedBuilder()
         .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
  .setDescription(`تذكرتك  ${channel}`)
     
    interaction.reply({ embeds: [yt] , ephemeral: true})
	   const askeadmin = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .setDescription(`${bfind.buy}`)
 channel.send({ content: `مرحبا بيك <@${interaction.user.id}>! \n<@&${finder.staff}>`, embeds: [askeadmin],components: [bclose],ephemeral: false})

     new tickets({
        user: interaction.user.id,
        name: channel.name,
        guildId: interaction.guild.id,
        guildName: interaction.guild.name,
        channelId: channel.id,
status: true,
prent: channel.parent.id,
}).save();
}

const accounts = require("../../models/account");  

if (buttonID === 'baccounts') {

  const fdc = await black.findOne({
    guildId: interaction.guild.id,
    user: interaction.user.id,
  });
  
  const rds = new EmbedBuilder()
    .setColor(find.color)
    .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
    .setDescription('أنت محظور من استخدام التذاكر.');
  
  if (fdc) return interaction.reply({ embeds: [rds], ephemeral: true });
  
  const used = await tickets.findOne({
    user: interaction.user.id,
    prent: finder.accountc,
    status: true,
  });

  const us = new EmbedBuilder()
    .setColor(find.color)
    .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
    .setDescription('لديك تذكرة مفتوحة في هذا القسم بالفعل.');
  
  if (used) return interaction.reply({ embeds: [us], ephemeral: true });

  const update = { $inc: { num: 1 } };
  const options = { new: true, upsert: true };
  const scccv = await nufs.updateMany({}, update, options);

  const accountsData = await accounts.find({});

  if (accountsData.length === 0) {
    const noAccountsEmbed = new EmbedBuilder()
      .setColor(find.color)
      .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .setDescription('لا توجد حسابات متاحة في المخزن. نعتذر عن الإزعاج.');
    return interaction.reply({ embeds: [noAccountsEmbed], ephemeral: true });
  }

  const channel = await interaction.guild.channels.create({
    name: `ticket-${dcs.num}`,
    type: ChannelType.GuildText,
    topic: `قسم شراء الحسابات`,
    parent: finder.accountc,
    permissionOverwrites: [
      {
        id: interaction.member.id,
        allow: [PermissionFlagsBits.ViewChannel],
		deny: [PermissionFlagsBits.SendMessages],
      },
      {
        id: interaction.guild.id,
        deny: [PermissionFlagsBits.ViewChannel],
      },
    ],
  });

  const yt = new EmbedBuilder()
    .setColor(find.color)
    .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
    .setDescription(`تذكرتك: ${channel}`);
  
  interaction.reply({ embeds: [yt], ephemeral: true });

  const accountsMap = new Map();
  accountsData.forEach((account) => {
    const key = `${account.platform}`;
    if (accountsMap.has(key)) {
      accountsMap.get(key).push(account);
    } else {
      accountsMap.set(key, [account]);
    }
  });

  const selectMenuOptions = [];
  accountsMap.forEach((accounts, key) => {
    const [platform] = key.split('-');
    selectMenuOptions.push({
      label: `المنصة: ${platform}`,
      description: accounts.length > 1 ? `المتوفر: ${accounts.length} حسابات` : 'حساب واحد',
      value: key,
    });
  });

  selectMenuOptions.push({
    label: "إلغاء - ❌",
    description: "إلغاء شراء الحساب (إغلاق التذكرة)",
    value: "cancel",
  });

  const row = new ActionRowBuilder()
    .addComponents(
      new SelectMenuBuilder()
        .setCustomId('accountshop')
        .setPlaceholder('يرجى اختيار المنصة.')
        .setMinValues(1)
        .setMaxValues(1)
        .addOptions(selectMenuOptions)
    );

  const welcomeEmbed = new EmbedBuilder()
    .setColor(find.color)
    .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
    .setDescription('مرحبًا! يرجى اختيار المنصة التي ترغب في شراء الحساب منها:');

  channel.send({ content: `${interaction.user}`, embeds: [welcomeEmbed], components: [row], ephemeral: false });

  new tickets({
    user: interaction.user.id,
    name: channel.name,
    guildId: interaction.guild.id,
    guildName: interaction.guild.name,
    channelId: channel.id,
    status: true,
    prent: channel.parent.id,
  }).save();
}


const pnitro = require("../../models/tnitro");
const nitros = require("../../models/pnitro");

if (buttonID === 'bnitro') {

  const fdc = await black.findOne({
    guildId: interaction.guild.id,
    user: interaction.user.id,
  });

  const rds = new EmbedBuilder()
    .setColor(find.color)
    .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
    .setDescription('انت محظور من التذاكر');

  if (fdc) return interaction.reply({ embeds: [rds], ephemeral: true });

  const used = await tickets.findOne({
    user: interaction.user.id,
    prent: finder.nitroc,
    status: true,
  });

  const us = new EmbedBuilder()
    .setColor(find.color)
    .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
    .setDescription(`لديك تذكرة في هذا القسم بالفعل`);

  if (used) return interaction.reply({ embeds: [us], ephemeral: true });

  const update = { $inc: { num: 1 } };
  const options = { new: true, upsert: true };
  const scccv = await nufs.updateMany({}, update, options);

  const channel = await interaction.guild.channels.create({
    name: `ticket-${dcs.num}`,
    type: ChannelType.GuildText,
    topic: `قسم شراء نيترو`,
    parent: finder.nitroc,
    permissionOverwrites: [
      {
        id: interaction.member.id,
             allow: [PermissionFlagsBits.ViewChannel],
		deny: [PermissionFlagsBits.SendMessages],
      },
      {
        id: interaction.guild.id,
        deny: [PermissionFlagsBits.ViewChannel],
      },
    ],
  });

  const yt = new EmbedBuilder()
    .setColor(find.color)
    .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
    .setDescription(`تذكرتك ${channel}`);

  interaction.reply({ embeds: [yt], ephemeral: true });

  const dataFromMongo = await pnitro.find({});
  const selectMenuOptions = await Promise.all(dataFromMongo.map(async (data) => {
    const nitroCount = await nitros.countDocuments({ type: data.type });
    if (nitroCount > 0) {
      return {
        label: `${data.type} - in Stock: ${nitroCount}`,
        description: `$${data.price}`,
        value: data.type,
        disabled: false,
      };
    }
    return null;
  }));

  const filteredMenuOptions = selectMenuOptions.filter(option => option !== null);

  filteredMenuOptions.push({
    label: "الغاء - ❌",
    description: "الغاء شراء النيترو (اغلاق التذكرة)",
    value: "cancel",
  });

  const row = new ActionRowBuilder()
    .addComponents(
      new SelectMenuBuilder()
        .setCustomId('nitrosf')
        .setPlaceholder('اختر نوع النيترو.')
        .setMinValues(1)
        .setMaxValues(1)
        .addOptions(filteredMenuOptions)
    );

  const askeadmin = new EmbedBuilder()
    .setColor(find.color)
    .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
    .setDescription(`يرجى تحديد نوع النيترو الذي ترغب في شرائه من القائمة أدناه`);

  channel.send({ content: `${interaction.user}`, embeds: [askeadmin], components: [row], ephemeral: false });

  new tickets({
    user: interaction.user.id,
    name: channel.name,
    guildId: interaction.guild.id,
    guildName: interaction.guild.name,
    channelId: channel.id,
    status: true,
    prent: channel.parent.id,
  }).save();
}

if (buttonID === 'bvisa') {

  const fdc = await black.findOne({
        guildId: interaction.guild.id,
        user: interaction.user.id,
      });
     const rds = new EmbedBuilder()
            .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
    .setDescription('انت محظور من التذاكر')
      if (fdc) return interaction.reply({ embeds: [rds], ephemeral: true })

    const used = await tickets.findOne({
        user: interaction.user.id,
	prent:  finder.visac,
		status: true,
      });

	       const us = new EmbedBuilder()
         .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
  .setDescription(`لديك تذكرة في هذا القسم بالفعل`)
     
      if (used) return interaction.reply({ embeds: [us] , ephemeral: true})
  const update = { $inc: { num: 1 } };
  const options = { new: true, upsert: true };
  const scccv = await nufs.updateMany({}, update, options);


	    const channel = await interaction.guild.channels.create({
          name: `ticket-${dcs.num}`,
        type: ChannelType.GuildText,
         topic: `قسم شراء فيزا`,
parent:  finder.visac,
        permissionOverwrites: [
{
id: interaction.member.id,
        allow: [PermissionFlagsBits.ViewChannel],
		deny: [PermissionFlagsBits.SendMessages],
},
          {
id:   interaction.guild.id,
deny: [PermissionFlagsBits.ViewChannel],
},
],
      });

       const yt = new EmbedBuilder()
         .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
  .setDescription(`تذكرتك  ${channel}`)
     
    interaction.reply({ embeds: [yt] , ephemeral: true})
const dataFromMongo = await postps.find({});
const selectMenuOptions = dataFromMongo.map((data) => ({
    label: data.name,
       description: "$"+ String(data.price) + " السعر",
    value: String(data.type),
}));

selectMenuOptions.push({
    label: "الغاء - ❌ ",
    description: "الغاء شراء فيزا (اغلاق التذكرة)",
    value: "cancel",
});

const row = new ActionRowBuilder()
    .addComponents(
        new SelectMenuBuilder()
            .setCustomId('postsf')
            .setPlaceholder('Choose a Visa.')
            .setMinValues(1)
            .setMaxValues(1)
            .addOptions(selectMenuOptions)
    );

	   const askeadmin = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .setDescription(`${bfind.buyp}`)
 channel.send({ content: `${interaction.user} `, embeds: [askeadmin],components: [row],ephemeral: false})

     new tickets({
        user: interaction.user.id,
        name: channel.name,
        guildId: interaction.guild.id,
        guildName: interaction.guild.name,
        channelId: channel.id,
status: true,
  prent: channel.parent.id, 
}).save();

}

if (buttonID === 'up') {
    const can = await upns.findOne({
      user: interaction.user.id,
  active1: true,
  active2: true,
      active3: true,
  active4: true,
  active5: true,
    });
  const fdc = await black.findOne({
        guildId: interaction.guild.id,
        user: interaction.user.id,
      });
     const rds = new EmbedBuilder()
            .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
    .setDescription('انت محظور من التذاكر')
      if (fdc) return interaction.reply({ embeds: [rds], ephemeral: true })
    const used = await tickets.findOne({
        user: interaction.user.id,
	    prent: finder.uptimec,
		status: true,
      });


	       const us = new EmbedBuilder()
         .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
  .setDescription(`لديك تذكرة في هذا القسم بالفعل`)
     
      if (used) return interaction.reply({ embeds: [us] , ephemeral: true})
	       const canrs = new EmbedBuilder()
         .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
  .setDescription(`لديك خمسة اب تايم مفعلة وقد وصلت إلى الحد الأقصى.`)
     
      if (can) return interaction.reply({ embeds: [canrs] , ephemeral: true})
  const update = { $inc: { num: 1 } };
  const options = { new: true, upsert: true };
  const scccv = await nufs.updateMany({}, update, options);


	    const channel = await interaction.guild.channels.create({
          name: `ticket-${dcs.num}`,
        type: ChannelType.GuildText,
         topic: `قسم شراء اب تايم , Support for ${interaction.user.username} | ID: ${interaction.user.id}`,
    parent: finder.uptimec,
        permissionOverwrites: [
{
id: interaction.member.id,
        allow: [PermissionFlagsBits.ViewChannel],
		deny: [PermissionFlagsBits.SendMessages],
},
          {
id:   interaction.guild.id,
deny: [PermissionFlagsBits.ViewChannel],
},
],
      });


       const yt = new EmbedBuilder()
         .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
  .setDescription(`تذكرتك  ${channel}`)
     
    interaction.reply({ embeds: [yt] , ephemeral: true})
const dataFromMongo = await upps.find({});
const selectMenuOptions = dataFromMongo.map((data) => ({
    label: data.name,
    description: "$"+ String(data.price) + " السعر",
    value: String(data.days),
}));

selectMenuOptions.push({
    label: "الغاء - ❌ ",
    description: "الغاء شراء اب تايم (اغلاق التذكرة)",
    value: "cancel",
});

const row = new ActionRowBuilder()
    .addComponents(
        new SelectMenuBuilder()
            .setCustomId('upsf')
            .setPlaceholder('Choose a Package.')
            .setMinValues(1)
            .setMaxValues(1)
            .addOptions(selectMenuOptions)
    );

	   const askeadmin = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .setDescription(`${bfind.buyup}`)
 channel.send({ content: `اهلأ بك ,${interaction.user} `, embeds: [askeadmin],components: [row],ephemeral: false})

     new tickets({
        user: interaction.user.id,
        name: channel.name,
        guildId: interaction.guild.id,
        guildName: interaction.guild.name,
        channelId: channel.id,
status: true,
  prent: channel.parent.id, 
}).save();

}
if(buttonID === 'nticket') {

    if (!interaction.member.roles.cache.some(role => role.id === finder.staff)) {
      return interaction.reply({
        embeds: [
          new EmbedBuilder()
            .setDescription(`**Only Staff command!**`)
          .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
        ] , ephemeral: true
      });
    }
    const can = await tickets.findOne({
      channelId: interaction.channel.id,
    });
const customModalId = `modal_${Math.floor(Math.random() * 1000000)}`;
            let modal = new ModalBuilder()
                  .setCustomId(customModalId)
                .setTitle("x4 System");



            let namet = new TextInputBuilder()
                .setCustomId("namer")
                .setLabel("New Name Ticket")
                .setPlaceholder("يرجى تحديد اسم التذكرة الجديد أو تركه فارغًا لاسترجاع الاسم الأصلي.")
                .setStyle(TextInputStyle.Short)
                .setRequired(false);


            let t = new ActionRowBuilder().addComponents(namet);

            modal.addComponents(t);

            await interaction.showModal(modal);
            let response = await interaction.awaitModalSubmit({ time: 300000 });

        
            let tt = response.fields.getTextInputValue('namer');
interaction.channel.setName(tt || (can ? can.name : ""))
	   const chname = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
	  .setDescription(`تم تغير اسم التذكرة بواسطة ${interaction.user} `)
 .addFields(
              {
                                name: "الاسم الجديد ",
                                value: tt || (can ? can.name : ""),
                                inline: true,
                            },
      {
                                name: "الاسم القديم ",
                                value: `${interaction.channel.name}`,
                                inline: true,
                            })
      	.setFooter({ text: 'في حالة تغيير الاسم بشكل متكرر، سيتم تطبيق إجراءات قيود منع الاداري من تغيير الاسم لفترة زمنية محددة. ', iconURL: client.user.displayAvatarURL({dynamic: true}) });
	 interaction.channel.send({ embeds: [chname],ephemeral: false});
      response.reply({ content: "تم تغير اسم التذكرة بنجاح", ephemeral: true });
}
if(buttonID === 'upn_1') {

    const can = await upns.findOne({
      user: interaction.user.id,
      active1: true,
    });
    const can1 = await upns.findOne({
      user: interaction.user.id,
      active1: false,
    });
if (can) {
const customModalId = `modal_${Math.floor(Math.random() * 1000000)}`;
            let modal = new ModalBuilder()
                  .setCustomId(customModalId)
                .setTitle("x4 System");



            let namet = new TextInputBuilder()
                .setCustomId("namer")
                .setLabel("Update Url")
                .setPlaceholder("لـ تغير الرابط اكتب الرابط الجديد")
                .setStyle(TextInputStyle.Short)
                .setRequired(true);


            let t = new ActionRowBuilder().addComponents(namet);

            modal.addComponents(t);

            await interaction.showModal(modal);
            let response = await interaction.awaitModalSubmit({ time: 300000 });

        
            let tt = response.fields.getTextInputValue('namer');
	   const chname = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
 .addFields(
              {
                                name: "الرابط الجديد ",
                                value: `\`\`\`${tt}\`\`\``,
                                inline: true,
                            },
      {
                                name: "الرابط القديم ",
                                value: `\`\`\`${can.url1}\`\`\``,
                                inline: true,
                            })
   
	 response.reply({ embeds: [chname],ephemeral: true});

  const filter = { user: interaction.user.id, active1: true };
  const update = { $set: { url1: tt } };
  const options = { new: true, upsert: true };
  const scccv = await upns.findOneAndUpdate(filter, update, options);
} else if (can1) {
	   const chname = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
 	  .setDescription(`انتهي مدة الاشتراك يرجي التجديد او التواصل مع المبرمج <@768270506142466058>`)
   
	 interaction.reply({ embeds: [chname],ephemeral: true});
}
}
if(buttonID === 'upn_2') {

    const can = await upns.findOne({
      user: interaction.user.id,
      active2: true,
    });
    const can2 = await upns.findOne({
      user: interaction.user.id,
      active2: false,
    });
if (can) {
const customModalId = `modal_${Math.floor(Math.random() * 1000000)}`;
            let modal = new ModalBuilder()
                  .setCustomId(customModalId)
                .setTitle("x4 System");



            let namet = new TextInputBuilder()
                .setCustomId("namer")
                .setLabel("Update Url")
                .setPlaceholder("لـ تغير الرابط اكتب الرابط الجديد")
                .setStyle(TextInputStyle.Short)
                .setRequired(true);


            let t = new ActionRowBuilder().addComponents(namet);

            modal.addComponents(t);

            await interaction.showModal(modal);
            let response = await interaction.awaitModalSubmit({ time: 300000 });

        
            let tt = response.fields.getTextInputValue('namer');
	   const chname = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
 .addFields(
              {
                                name: "الرابط الجديد ",
                                value: `\`\`\`${tt}\`\`\``,
                                inline: true,
                            },
      {
                                name: "الرابط القديم ",
                                value: `\`\`\`${can.url2}\`\`\``,
                                inline: true,
                            })
   
	 response.reply({ embeds: [chname],ephemeral: true});

  const filter = { user: interaction.user.id, active2: true };
  const update = { $set: { url2: tt } };
  const options = { new: true, upsert: true };
  const scccv = await upns.findOneAndUpdate(filter, update, options);
} else if (can2) {
	   const chname = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
 	  .setDescription(`انتهي مدة الاشتراك يرجي التجديد او التواصل مع المبرمج <@768270506142466058>`)
   
	 interaction.reply({ embeds: [chname],ephemeral: true});
}
}
if(buttonID === 'upn_3') {

    const can = await upns.findOne({
      user: interaction.user.id,
      active3: true,
    });
    const can3 = await upns.findOne({
      user: interaction.user.id,
      active3: false,
    });
if (can) {
const customModalId = `modal_${Math.floor(Math.random() * 1000000)}`;
            let modal = new ModalBuilder()
                  .setCustomId(customModalId)
                .setTitle("x4 System");



            let namet = new TextInputBuilder()
                .setCustomId("namer")
                .setLabel("Update Url")
                .setPlaceholder("لـ تغير الرابط اكتب الرابط الجديد")
                .setStyle(TextInputStyle.Short)
                .setRequired(true);


            let t = new ActionRowBuilder().addComponents(namet);

            modal.addComponents(t);

            await interaction.showModal(modal);
            let response = await interaction.awaitModalSubmit({ time: 300000 });

        
            let tt = response.fields.getTextInputValue('namer');
	   const chname = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
 .addFields(
              {
                                name: "الرابط الجديد ",
                                value: `\`\`\`${tt}\`\`\``,
                                inline: true,
                            },
      {
                                name: "الرابط القديم ",
                                value: `\`\`\`${can.url3}\`\`\``,
                                inline: true,
                            })
   
	 response.reply({ embeds: [chname],ephemeral: true});

  const filter = { user: interaction.user.id, active3: true };
  const update = { $set: { url3: tt } };
  const options = { new: true, upsert: true };
  const scccv = await upns.findOneAndUpdate(filter, update, options);
} else if (can3) {
	   const chname = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
 	  .setDescription(`انتهي مدة الاشتراك يرجي التجديد او التواصل مع المبرمج <@768270506142466058>`)
   
	 interaction.reply({ embeds: [chname],ephemeral: true});
}
}
if(buttonID === 'upn_4') {

    const can = await upns.findOne({
      user: interaction.user.id,
      active4: true,
    });
    const can4 = await upns.findOne({
      user: interaction.user.id,
      active4: false,
    });
if (can) {
const customModalId = `modal_${Math.floor(Math.random() * 1000000)}`;
            let modal = new ModalBuilder()
                  .setCustomId(customModalId)
                .setTitle("x4 System");



            let namet = new TextInputBuilder()
                .setCustomId("namer")
                .setLabel("Update Url")
                .setPlaceholder("لـ تغير الرابط اكتب الرابط الجديد")
                .setStyle(TextInputStyle.Short)
                .setRequired(true);


            let t = new ActionRowBuilder().addComponents(namet);

            modal.addComponents(t);

            await interaction.showModal(modal);
            let response = await interaction.awaitModalSubmit({ time: 300000 });

        
            let tt = response.fields.getTextInputValue('namer');
	   const chname = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
 .addFields(
              {
                                name: "الرابط الجديد ",
                                value: `\`\`\`${tt}\`\`\``,
                                inline: true,
                            },
      {
                                name: "الرابط القديم ",
                                value: `\`\`\`${can.url4}\`\`\``,
                                inline: true,
                            })
   
	 response.reply({ embeds: [chname],ephemeral: true});

  const filter = { user: interaction.user.id, active4: true };
  const update = { $set: { url4: tt } };
  const options = { new: true, upsert: true };
  const scccv = await upns.findOneAndUpdate(filter, update, options);
} else if (can4) {
	   const chname = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
 	  .setDescription(`انتهي مدة الاشتراك يرجي التجديد او التواصل مع المبرمج <@768270506142466058>`)
   
	 interaction.reply({ embeds: [chname],ephemeral: true});
}
}
if(buttonID === 'upn_5') {

    const can = await upns.findOne({
      user: interaction.user.id,
      active5: true,
    });
    const can5 = await upns.findOne({
      user: interaction.user.id,
      active5: false,
    });
if (can) {
const customModalId = `modal_${Math.floor(Math.random() * 1000000)}`;
            let modal = new ModalBuilder()
                  .setCustomId(customModalId)
                .setTitle("x4 System");



            let namet = new TextInputBuilder()
                .setCustomId("namer")
                .setLabel("Update Url")
                .setPlaceholder("لـ تغير الرابط اكتب الرابط الجديد")
                .setStyle(TextInputStyle.Short)
                .setRequired(true);


            let t = new ActionRowBuilder().addComponents(namet);

            modal.addComponents(t);

            await interaction.showModal(modal);
            let response = await interaction.awaitModalSubmit({ time: 300000 });

        
            let tt = response.fields.getTextInputValue('namer');
	   const chname = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
 .addFields(
              {
                                name: "الرابط الجديد ",
                                value: `\`\`\`${tt}\`\`\``,
                                inline: true,
                            },
      {
                                name: "الرابط القديم ",
                                value: `\`\`\`${can.url5}\`\`\``,
                                inline: true,
                            })
   
	 response.reply({ embeds: [chname],ephemeral: true});

  const filter = { user: interaction.user.id, active5: true };
  const update = { $set: { url5: tt } };
  const options = { new: true, upsert: true };
  const scccv = await upns.findOneAndUpdate(filter, update, options);
} else if (can5) {
	   const chname = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
 	  .setDescription(`انتهي مدة الاشتراك يرجي التجديد او التواصل مع المبرمج <@768270506142466058>`)
   
	 interaction.reply({ embeds: [chname],ephemeral: true});
}
}
if (buttonID === 'claim') {
    if (!interaction.member.roles.cache.some(role => role.id === finder.staff)) {
      return interaction.reply({
        embeds: [
          new EmbedBuilder()
            .setDescription(`**Only Staff command!**`)
          .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
        ] , ephemeral: true
      });
    }
  const rgvs = await clarm.findOne({
    channelId: interaction.channel.id,
  });
  const can = await tickets.findOne({
    channelId: interaction.channel.id,
  });

  if (rgvs && rgvs.user === interaction.user.id) {

interaction.message.edit({components: [buttonclosee],ephemeral: false})
  

    const channelPermissions = interaction.channel.permissionOverwrites.resolve(interaction.user.id);
    if (channelPermissions) {
      channelPermissions.delete().catch(() => 0);
    }

const uclim = [
  { userId: finder.staff, permissions: { SendMessages: true } },
];

uclim.forEach(user => {
  
    if (user.userId === finder.staff) {
      interaction.channel.permissionOverwrites.edit(user.userId, { SendMessages: true });
  }
});

    const uncl = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .setDescription(`تم إلغاء استلام التذكرة بواسطة ${interaction.user}`);

    return interaction.reply({ embeds: [uncl], ephemeral: false }).then(async () => {
      const data = await clarm.findById(rgvs._id);
      if (data) {
        await data.delete();
      }
    });
  } else if (rgvs) {
    const errorEmbed = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .setDescription(`<@${rgvs.user}>  الشخص المسؤول عن التذكرة `);

    return interaction.reply({ embeds: [errorEmbed], ephemeral: true });
  } else {
      interaction.channel.permissionOverwrites.edit(interaction.user.id, {
        SendMessages: true,
        ViewChannel: true,
        ReadMessageHistory: true,
      })
const clim = [
  { userId: interaction.user.id, permissions: { SendMessages: true, ViewChannel: true, ReadMessageHistory: true } },
   { userId: finder.staff, permissions: { SendMessages: false}},];

clim.forEach(user => {
  interaction.channel.permissionOverwrites.edit(user.userId, user.permissions);
});

    new clarm({
      user: interaction.user.id,
      name: interaction.channel.name,
      guildId: interaction.guild.id,
      guildName: interaction.guild.name,
      channelId: interaction.channel.id,
    }).save();

interaction.message.edit({components: [buttonclime],ephemeral: false})
    const clrs = new EmbedBuilder()
     .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .setDescription(`تم استلام التذكرة بواسطة  ${interaction.user}`);

    interaction.reply({ embeds: [clrs], ephemeral: false });
  }
}

const motops = require("../../models/topers");
if(buttonID === 'close') {
  if (!interaction.member.roles.cache.some(role => role.id === finder.staff)) {
      return interaction.reply({
        embeds: [
          new EmbedBuilder()
            .setDescription(`**Only Staff command!**`)
          .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
        ] , ephemeral: true
      });
    }
	
	   const can = await tickets.findOne({
      channelId: interaction.channel.id,
	  status: true,
    });
if (can) {

const smv = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setLabel("🔓 Open")
      .setStyle(2)
      .setCustomId("oper"),
	   new ButtonBuilder()
      .setLabel("⛔ Delete")
      .setStyle(2)
      .setCustomId("delr"),
);

  const filter = { channelId: interaction.channel.id };
  const update = { $set: { status: false, } };
  const options = { new: true, upsert: true };
  const scccv = await tickets.findOneAndUpdate(filter, update, options);

      const close = new EmbedBuilder()
      .setColor(find.color)
      .setDescription(`تم اغلاق التذكرة بواسطة ${interaction.user}`);
    await interaction.channel.send({ embeds: [close], ephemeral: false });
  //  const channelName = await interaction.channel.name.replace('ticket', 'closed');
//await interaction.channel.setName(channelName)
        const channelPermissions = interaction.channel.permissionOverwrites.resolve(can.user);
		      const contro = new EmbedBuilder()
      .setColor(find.color)
      .setDescription(`\`\`\`Support team ticket controls\`\`\``);
    await interaction.channel.send({ embeds: [contro],components: [smv], ephemeral: false });
  await interaction.channel.setParent(finder.close);
    const closey = new EmbedBuilder()
      .setColor(find.color)
      .setDescription(`تم اغلاق التذكرة`);
   
 await interaction.reply({ embeds: [closey], ephemeral: true });
    const user = await interaction.guild.members.fetch(can.user);
    if (user) {
        const thankYouMessage = new EmbedBuilder()
            .setColor(find.color)
            .setDescription(`
			    ** تم اغلاق تذكرتك **
                نتمنى أن تكون خدمتنا جيدة بالنسبة لك. 
                إذا واجهت أي مشكلة، لا تتردد في التواصل معنا عبر [تذكرة الدعم الفني](https://discord.com/channels/${interaction.guild.id}/1249419474180898876).
                تقييمك يهمنا لتحسين تجربة السيرفر، يمكنك تقييمنا [هنا](https://discord.com/channels/${interaction.guild.id}/1113946723090448495).
            `);
        await user.send({ embeds: [thankYouMessage], ephemeral: true });
    }
}else{

   
    const closey = new EmbedBuilder()
      .setColor(find.color)
      .setDescription(`التذكرة مغلقة بالفعل`);
   
await  interaction.reply({ embeds: [closey], ephemeral: true });


}
}	

  if(buttonID === 'oper') {
  if (!interaction.member.roles.cache.some(role => role.id === finder.staff)) {
      return interaction.reply({
        embeds: [
          new EmbedBuilder()
            .setDescription(`**Only Staff command!**`)
          .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
        ] , ephemeral: true
      });
    }
	
	   const can = await tickets.findOne({
      channelId: interaction.channel.id,
	  status: false,
    });


  const filter = { channelId: interaction.channel.id };
  const update = { $set: { status: true, } };
  const options = { new: true, upsert: true };
  const scccv = await tickets.findOneAndUpdate(filter, update, options);

      const close = new EmbedBuilder()
      .setColor(find.color)
      .setDescription(`تم اعادة فتح التذكرة بواسطة ${interaction.user}`);
    await interaction.channel.send({ embeds: [close], ephemeral: false });


 //   const channelName = await interaction.channel.name.replace('closed', 'ticket');
//await interaction.channel.setName(channelName)

  await interaction.channel.setParent(can.prent);
    const closey = new EmbedBuilder()
      .setColor(find.color)
      .setDescription(`تم اعادة فتح التذكرة`);
   
await  interaction.reply({ embeds: [closey], ephemeral: true });
await interaction.message.delete();

       await interaction.channel.permissionOverwrites.edit(can.user, {
          SendMessages: true,
          ViewChannel: true,
          ReadMessageHistory: true,
        });
}	


if(buttonID === 'delr') {
    if (!interaction.member.roles.cache.some(role => role.id === finder.staff)) {
      return interaction.reply({
        embeds: [
          new EmbedBuilder()
            .setDescription(`**Only Staff command!**`)
          .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
        ] , ephemeral: true
      });
    }

    const can = await tickets.findOne({
      channelId: interaction.channel.id,
	  status: false,
    });
  const rgvs = await clarm.findOne({
    channelId: can.channelId,
  });
  
      const categoryId = interaction.guild.channels.cache.get(can.prent);
    const categoryName = categoryId.name;
const moment = require('moment-timezone');

    const saudiArabiaTimezone = 'Asia/Riyadh';
    const currentTime = moment().tz(saudiArabiaTimezone).format('D / M / YYYY : h:mm A').replace('AM', 'ص').replace('PM', 'م');
    const userticketi = can.user;
    const userticket = interaction.guild.members.cache.get(userticketi);
if (rgvs) {
  const filter = { user: rgvs.user };
  const update = { $inc: { point: 1, tickets: 1 } };
  const options = { new: true, upsert: true };
  const scccv = await motops.findOneAndUpdate(filter, update, options);
       const channel = interaction.client.channels.cache.get('1155945817820119111');
const mon = new EmbedBuilder()
      .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
            .setTitle(`Give Points`)
            .setDescription(`**By: System **`)
            .addFields(
                { name: `**User:**`, value: `**<@${rgvs.user}>**`, inline: true },
                { name: `**Points:**`, value: `**Add: 1 All Points : ${scccv.point}   **`, inline: true },
     { name: `**Tickets:**`, value: `**Add: 1 All Tickets : ${scccv.tickets}   **`, inline: true },
                { name: `**Reason:**`, value: `**Ticket System**`, inline: true },
            );

        channel.send({ embeds: [mon] });

}
   
    const close = new EmbedBuilder()
      .setColor(find.color)
      .setDescription(`سيتم حذف التذكره خلال 5 ثواني`);
   
    await interaction.message.reply({ embeds: [close], ephemeral: false });
    const trs = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .setDescription(`سيتم الان مراجعه  التذكره من قبل البوت شكرا لك`);
    await interaction.reply({ embeds: [trs], ephemeral: true });
    setTimeout(async () => {
      try {

    const { generateTranscript } = require('reconlx');
    const channel = interaction.channel;
    const transcriptChannelID = finder.trans;
    const transcriptChannel = interaction.guild.channels.cache.get(transcriptChannelID);
    

        const cl = await clarm.findOne({
      channelId: interaction.channel.id,
    });
    const userticketi = can.user;
    const userticket = interaction.guild.members.cache.get(userticketi);



    const msgs = await getMessages(channel);
    const transcript = await generateTranscript({ messages: msgs.reverse(), guild: interaction.guild, channel: channel });
    const html = transcript.toString();
    const transcriptBuffer = Buffer.from(html, "utf-8");
    const attachment = new AttachmentBuilder(transcriptBuffer, { name: `${interaction.channel.name}.html` });

    const trans = new EmbedBuilder()
      .setThumbnail(interaction.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }))
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .addFields({
        name: "Owner Ticket :",
        value: `${userticket}`,
        inline: true,
      }, {
        name: "Ticket Name :",
        value: `${interaction.channel.name}`,
        inline: true,
      }, {
        name: "Delete Ticket By :",
        value: `${interaction.user}`,
        inline: true,
      }, {
        name: "Claimed Ticket By :",
  value: cl && cl.user ? `<@${cl.user}>` : "غير مستلم",
        inline: true,
      }, {
        name: "Ticket Delete Date :",
        value: `${currentTime}`,
        inline: true,
      }, {
        name: "Ticket Type :",
        value: `${categoryName}`,
        inline: true,
      })


    if (transcriptChannel && attachment) {
      await transcriptChannel.send({ embeds: [trans], files: [attachment] });
    }

      delete lastmoUsage[can.user];
        const data = await tickets.findById(can._id);
        if (data) {
          await data.delete();
        }
        await interaction.channel.delete();
      } catch (error) {
        console.error(error);
      }
    }, 500);

}

async function getMessages(channel) {
  let msgs = [];
  
  const getMsg = async (options = { limit: 100 }) => {
    const messages = await channel.messages.fetch(options);
    msgs = msgs.concat(Array.from(messages.values()));
    if (messages.size === 100) {
      await getMsg({ limit: 100, before: messages.last().id });
    }
  }

  await getMsg();
  return msgs;
}
 
    if (buttonID === 'manage') {
    if (!interaction.member.roles.cache.some(role => role.id === finder.staff)) {
      return interaction.reply({
        embeds: [
          new EmbedBuilder()
            .setDescription(`**Only Staff command!**`)
          .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
        ] , ephemeral: true
      });
    }
      const menu = new UserSelectMenuBuilder()
        .setCustomId('ticket-manage-menu')
        .setPlaceholder("➕ Choose a member.")
        .setMinValues(1)
        .setMaxValues(1);

      const response = interaction.reply({ components: [new ActionRowBuilder().addComponents(menu)], ephemeral: true });
    }
     const coders = require("../../models/coder");
  if (buttonID === 'name') {
const customModalId = `modal_${Math.floor(Math.random() * 1000000)}`;
            let modal = new ModalBuilder()
                  .setCustomId(customModalId)
                .setTitle("x4 System");



            let namet = new TextInputBuilder()
                .setCustomId("namer")
                .setLabel("اسم الروم")
                .setPlaceholder("هل تريد اختيار اسم روم الخاص ب اعلانك؟ اكتب الاسم الجديد هنا ")
                .setStyle(TextInputStyle.Short)
                .setRequired(false);


            let t = new ActionRowBuilder().addComponents(namet);

            modal.addComponents(t);

            await interaction.showModal(modal);
            let response = await interaction.awaitModalSubmit({ time: 300000 });

        
            let tt = response.fields.getTextInputValue('namer');

      const used = await buyofr.findOne({
      user: interaction.user.id,
    });


  const filter = { user: interaction.user.id };
  const update = { $set: { cname: tt } };
  const options = { new: true, upsert: true };
  const scccv = await buyofr.findOneAndUpdate(filter, update, options);


const buttonToRemoveId = 'name';
const buttonToRemoveIndex =  interaction.message.components[0].components.findIndex(button => button.customId === buttonToRemoveId);

if (buttonToRemoveIndex !== -1) {
   interaction.message.components[0].components.splice(buttonToRemoveIndex, 1);
  await  interaction.message.edit({ components: [ interaction.message.components[0]] });
}
    response.reply({ content: `تم اختيار اسم الروم`, ephemeral: true });
   
    }
  if (buttonID === 'gsm') {
const customModalId = `modal_${Math.floor(Math.random() * 1000000)}`;
            let modal = new ModalBuilder()
                  .setCustomId(customModalId)
                .setTitle("x4 System");



            let namet = new TextInputBuilder()
                .setCustomId("namer")
                .setLabel("كود خصم")
                .setPlaceholder("هل لديك كود خصم؟ قم بكتابته")
                .setStyle(TextInputStyle.Short)
                .setRequired(false);


            let t = new ActionRowBuilder().addComponents(namet);

            modal.addComponents(t);

            await interaction.showModal(modal);
            let response = await interaction.awaitModalSubmit({ time: 300000 });
            let tt = response.fields.getTextInputValue('namer');

      const used = await buyofr.findOne({
      user: interaction.user.id,
    });
     const ftr = await coders.findOne({
      code: tt,
    });
  if (ftr) {
const discountAmount = (used.price * ftr.discount) / 100;

const finalAmount = used.price - discountAmount;
let tax = Math.floor(finalAmount * (20) / (19) + (1))
  const filter = { user: interaction.user.id };
  const update = { $set: { price: finalAmount } };
  const options = { new: true, upsert: true };
  const scccv = await buyofr.findOneAndUpdate(filter, update, options);


     const trs = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
.setTitle(`تم تفعيل الخصم`)
      .setDescription(`Please Send \`\`\`c 1037036813182836808 ${tax}\`\`\` Credits to <@1037036813182836808>`)
	.setFooter({ text: 'غير مسؤولين لتحويلك خارج هذا التذكرة او تحويل لشخص اخر', iconURL: client.user.displayAvatarURL({dynamic: true}) });
const buttonToRemoveId = 'gsm';
const buttonToRemoveIndex = interaction.message.components[0].components.findIndex(button => button.customId === buttonToRemoveId);

if (buttonToRemoveIndex !== -1) {
    interaction.message.components[0].components.splice(buttonToRemoveIndex, 1);
    

    if (interaction.message.components[0].components.length >= 1 && interaction.message.components[0].components.length <= 5) {
      
        await interaction.message.edit({ embeds: [trs], components: [interaction.message.components[0]] });
    } else {
        await interaction.message.edit({ embeds: [trs], components: [] });
}
}
    response.reply({ content: ` تم خصم (${ftr.discount}%) من سعر المنتج`, ephemeral: true });
  } else {
 response.reply({ content: `الكود الذي أدخلته غير صحيح. الرجاء التحقق وإعادة المحاولة.`, ephemeral: true });
  }            
    }

  if (buttonID === 'plus') {
const customModalId = `modal_${Math.floor(Math.random() * 1000000)}`;
            let modal = new ModalBuilder()
                  .setCustomId(customModalId)
                .setTitle("x4 System");
            let namet = new TextInputBuilder()
                .setCustomId("namer")
                .setLabel("زيادة مبلغ الجيفاوي")
                .setPlaceholder("يرجي كتابه مقدار الزيادة ب ارقام فقط لا نقبل حروف او رموز")
                .setStyle(TextInputStyle.Short)
                .setRequired(false);


            let t = new ActionRowBuilder().addComponents(namet);

            modal.addComponents(t);

            await interaction.showModal(modal);
            let response = await interaction.awaitModalSubmit({ time: 300000 });

        
            let tt = response.fields.getTextInputValue('namer');
tt = parseInt(tt);
      const used = await buyofr.findOne({
      user: interaction.user.id,
    });


used.giveawy = parseInt(used.giveawy);
used.price = parseInt(used.price);
if (!isNaN(tt)) {

const giv = Math.floor(used.giveawy + tt)
const finalAmount = Math.floor(used.price + tt)
let tax = Math.floor(finalAmount * (20) / (19) + (1))
  const filter = { user: interaction.user.id };
  const update = { $set: { price: finalAmount, giveawy: giv } };
  const options = { new: true, upsert: true };
  const scccv = await buyofr.findOneAndUpdate(filter, update, options);
      const oldEmbed = interaction.message.embeds[0]; 

     const trs = new EmbedBuilder()
.setTitle((oldEmbed ? oldEmbed.title : ""))
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .setDescription(`Please Send \`\`\`c 1037036813182836808 ${tax}\`\`\` Credits to <@1037036813182836808>`)
	.setFooter({ text: 'غير مسؤولين لتحويلك خارج هذا التذكرة او تحويل لشخص اخر', iconURL: client.user.displayAvatarURL({dynamic: true}) })


  await  interaction.message.edit({ embeds: [trs]});

    response.reply({ content: `تم زيادة سعر الجيف اوي حسب رغبتك الي : ${giv}`, ephemeral: true });
  } else {
 response.reply({ content: `لا نقبل سوا الارقام فقط يرجي اعادة المحاولة`, ephemeral: true });
  }            
    }

  } else if (interaction.isAnySelectMenu()) {
           const selectID = interaction.customId;
if (selectID === 'ticket-manage-menu') {
  if (interaction.values && interaction.values.length > 0) {
    const memberId = interaction.values[0];
    const guildID = interaction.guild.id;
    const channelID = interaction.channel.id;
    const channel = interaction.channel;

    const member = interaction.guild.members.cache.get(memberId);

    if (member) {

      const channelPermissions = channel.permissionOverwrites.resolve(memberId);
      
      if (channelPermissions) {
        
        channelPermissions.delete().catch(() => 0);

        const removeuser = new EmbedBuilder()
            .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
          .setDescription(`<@${memberId}> تمت إزالته من التذكرة.`);
       interaction.reply({ embeds: [removeuser] });
      } else {
    
        channel.permissionOverwrites.edit(memberId, {
          SendMessages: true,
          ViewChannel: true,
          ReadMessageHistory: true,
        });

        const adduser = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
          .setDescription(`تمت إضافته إلى التذكرة <@${memberId}>  بواسطة ${interaction.user} .`);
        interaction.reply({ embeds: [adduser] });
      }
    }
  }
}

if (selectID === 'rolsf') {
    if (interaction.values && interaction.values.length > 0) {
        const selectedValue = interaction.values[0]; 
        if (selectedValue === 'cancel') {
  
    
    const can = await tickets.findOne({
      channelId: interaction.channel.id,
    });

const moment = require('moment-timezone');

    const saudiArabiaTimezone = 'Asia/Riyadh';
    const currentTime = moment().tz(saudiArabiaTimezone).format('D / M / YYYY : h:mm A').replace('AM', 'ص').replace('PM', 'م');
   interaction.message.edit({components: []})
    const close = new EmbedBuilder()
      .setColor(find.color)
      .setDescription(`سيتم اغلاق التذكره خلال 5 ثواني`);
   
    await interaction.message.reply({ embeds: [close], ephemeral: false });
    const trs = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .setDescription(`تم إلغاء العملية.`);
    await interaction.reply({ embeds: [trs], ephemeral: true });
    setTimeout(async () => {
      try {

    const { generateTranscript } = require('reconlx');
    const channel = interaction.channel;
    const transcriptChannelID = finder.trans;
    const transcriptChannel = interaction.guild.channels.cache.get(transcriptChannelID);
    

        const cl = await clarm.findOne({
      channelId: interaction.channel.id,
    });
    const userticketi = can.user;
    const userticket = interaction.guild.members.cache.get(userticketi);



    const msgs = await getMessages(channel);
    const transcript = await generateTranscript({ messages: msgs.reverse(), guild: interaction.guild, channel: channel });
    const html = transcript.toString();
    const transcriptBuffer = Buffer.from(html, "utf-8");
    const attachment = new AttachmentBuilder(transcriptBuffer, { name: `${interaction.channel.name}.html` });

    const trans = new EmbedBuilder()
      .setThumbnail(interaction.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }))
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .addFields({
        name: "Owner Ticket :",
        value: `${userticket}`,
        inline: true,
      }, {
        name: "Ticket Name :",
        value: `${interaction.channel.name}`,
        inline: true,
      }, {
        name: "Closed Ticket By :",
        value: `تم إلغاء العملية.`,
        inline: true,
      }, {
        name: "Ticket Closure Date :",
        value: `${currentTime}`,
        inline: true,
      }, {
        name: "Ticket Type :",
        value: `شراء رتبة`,
        inline: true,
      })


    if (transcriptChannel && attachment) {
      await transcriptChannel.send({ embeds: [trans], files: [attachment] });
    }


        const data = await tickets.findById(can._id);
        if (data) {
          await data.delete();
        }
        await interaction.channel.delete();
      } catch (error) {
        console.error(error);
      }
    }, 5000);
        } else {
const choices = [
  { name: "☭ Normal S", value: "1100842824930439180" },
  { name: "☭ Designer S", value: "1100842824360001596" },
  { name: "☭ Developer S", value: "1100842823340798064" },
  { name: "☭ Good S", value: "1100842821784719440" },
  { name: "☭ Epic S", value: "1100842820371235017" },
  { name: "☭ Favorite", value: "1100842819544961024" },
  { name: "☭ Bright S", value: "1100842818613805088" },
  { name: "☭ Private S", value: "1100842817707847811" },
  { name: "☭ Fantastic S", value: "1100842816512471050" },
  { name: "☭ Mythic S", value: "1100842814444683286" },
  { name: "☭ VIP S", value: "1100842812251058229" },
  { name: "☭ EG S", value: "1100842813400301608" }
];


    const targetRoles = interaction.guild.members.cache.get(interaction.user.id).roles.cache;
    const selectedRoleIndex = choices.findIndex(choice => choice.value === selectedValue);
    const highestRoleIndex = Math.max(...targetRoles.map(role => choices.findIndex(choice => choice.value === role.id)));

    if (highestRoleIndex > selectedRoleIndex) {
  const hig = new EmbedBuilder()
      .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
    .setColor(find.color ||  "4f1414" )
      .setDescription(`** لديك رتبة أعلى من المطلوبة.** `);
         return  interaction.reply({ embeds: [hig] });
    }
    if (targetRoles.has(selectedValue)) {
  const alr = new EmbedBuilder()
 .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
 .setColor(find.color ||  "4f1414" )
      .setDescription(`**لديك هذه الرتبة بالفعل.** `);
         return  interaction.reply({ embeds: [alr] });
    }
    const used = await roleps.findOne({
      id: selectedValue,
    });
  const filter = { user: interaction.user.id };
  const update = { $set: { message: interaction.message.id, channel: interaction.channel.id, role: selectedValue, price: used.price } };
  const options = { new: true, upsert: true };
  const scccv = await buyofr.findOneAndUpdate(filter, update, options);
let tax = Math.floor(used.price * (20) / (19) + (1))
const smv = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setLabel("استعمال كود خصم")
      .setStyle(2)
      .setCustomId("gsm"),
);

     const trs = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .setDescription(`Please Send \`\`\`c 1037036813182836808 ${tax}\`\`\` Credits to <@1037036813182836808>`)
	.setFooter({ text: 'غير مسؤولين لتحويلك خارج هذا التذكرة او تحويل لشخص اخر', iconURL: client.user.displayAvatarURL({dynamic: true}) });
   interaction.message.edit({embeds: [trs],components: [smv]})
       const yt = new EmbedBuilder()
         .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
  .setDescription(`تم اختيار رتبة <@&${selectedValue}>`)
     
    interaction.reply({ embeds: [yt] , ephemeral: true})       
setTimeout(async () => {

    const can = await tickets.findOne({
      channelId: interaction.channel.id,
    });

  const userticketi = can.user;
    const userticket = interaction.guild.members.cache.get(userticketi);

const moment = require('moment-timezone');
    const saudiArabiaTimezone = 'Asia/Riyadh';
    const currentTime = moment().tz(saudiArabiaTimezone).format('D / M / YYYY : h:mm A').replace('AM', 'ص').replace('PM', 'م');

    const trs = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .setDescription(`تم إلغاء العملية.`);
    await interaction.channel.send({ embeds: [trs], ephemeral: true });

    const { generateTranscript } = require('reconlx');
    const channel = interaction.channel;
    const transcriptChannelID = finder.trans;
    const transcriptChannel = interaction.guild.channels.cache.get(transcriptChannelID);
    const msgs = await getMessages(channel);
    const transcript = await generateTranscript({ messages: msgs.reverse(), guild: interaction.guild, channel: channel });
    const html = transcript.toString();
    const transcriptBuffer = Buffer.from(html, "utf-8");
    const attachment = new AttachmentBuilder(transcriptBuffer, { name: `${interaction.channel.name}.html` });

    const trans = new EmbedBuilder()
      .setThumbnail(interaction.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }))
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .addFields({
        name: "Owner Ticket :",
        value: `${userticket}`,
        inline: true,
      }, {
        name: "Ticket Name :",
        value: `${interaction.channel.name}`,
        inline: true,
      }, {
        name: "Closed Ticket By :",
        value: `عمليه غير ناجحه`,
        inline: true,
      }, {
        name: "Ticket Closure Date :",
        value: `${currentTime}`,
        inline: true,
      }, {
        name: "Ticket Type :",
        value: `شراء رتبة`,
        inline: true,
      })


    if (transcriptChannel && attachment) {
      await transcriptChannel.send({ embeds: [trans], files: [attachment] });
    }

    const lite = await buyofr.findOne({
      channelId: interaction.channel.id,
    });

        const data = await tickets.findById(can._id);
  const llite = await buyofr.findById(lite._id);
        if (data) {
          await data.delete();
     await llite.delete();
        }
        await interaction.channel.delete();
}, 300000);                                   
        }
    }
}

 if (selectID === 'roomsf') {
    if (interaction.values && interaction.values.length > 0) {
        const selectedValue = interaction.values[0]; 
        if (selectedValue === 'cancel') {
  
    
    const can = await tickets.findOne({
      channelId: interaction.channel.id,
    });

const moment = require('moment-timezone');

    const saudiArabiaTimezone = 'Asia/Riyadh';
    const currentTime = moment().tz(saudiArabiaTimezone).format('D / M / YYYY : h:mm A').replace('AM', 'ص').replace('PM', 'م');
   interaction.message.edit({components: []})
    const close = new EmbedBuilder()
      .setColor(find.color)
      .setDescription(`سيتم اغلاق التذكره خلال 5 ثواني`);
   
    await interaction.message.reply({ embeds: [close], ephemeral: false });
    const trs = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .setDescription(`تم إلغاء العملية.`);
    await interaction.reply({ embeds: [trs], ephemeral: true });
    setTimeout(async () => {
      try {

    const { generateTranscript } = require('reconlx');
    const channel = interaction.channel;
    const transcriptChannelID = finder.trans;
    const transcriptChannel = interaction.guild.channels.cache.get(transcriptChannelID);
    

        const cl = await clarm.findOne({
      channelId: interaction.channel.id,
    });
    const userticketi = can.user;
    const userticket = interaction.guild.members.cache.get(userticketi);



    const msgs = await getMessages(channel);
    const transcript = await generateTranscript({ messages: msgs.reverse(), guild: interaction.guild, channel: channel });
    const html = transcript.toString();
    const transcriptBuffer = Buffer.from(html, "utf-8");
    const attachment = new AttachmentBuilder(transcriptBuffer, { name: `${interaction.channel.name}.html` });

    const trans = new EmbedBuilder()
      .setThumbnail(interaction.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }))
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .addFields({
        name: "Owner Ticket :",
        value: `${userticket}`,
        inline: true,
      }, {
        name: "Ticket Name :",
        value: `${interaction.channel.name}`,
        inline: true,
      }, {
        name: "Closed Ticket By :",
        value: `تم إلغاء العملية.`,
        inline: true,
      }, {
        name: "Ticket Closure Date :",
        value: `${currentTime}`,
        inline: true,
      }, {
        name: "Ticket Type :",
        value: `شراء نيتروهات`,
        inline: true,
      })


    if (transcriptChannel && attachment) {
      await transcriptChannel.send({ embeds: [trans], files: [attachment] });
    }


        const data = await tickets.findById(can._id);
        if (data) {
          await data.delete();
        }
        await interaction.channel.delete();
      } catch (error) {
        console.error(error);
      }
    }, 5000);
        } else {
const customModalId = `modal_${Math.floor(Math.random() * 1000000)}`;
            let modal = new ModalBuilder()
                  .setCustomId(customModalId)
                .setTitle("x4 System");



            let namet = new TextInputBuilder()
                .setCustomId("namer")
                .setLabel("اسم الروم")
                .setPlaceholder("اكتب هنا اسم الروم")
                .setStyle(TextInputStyle.Short)
                .setRequired(true);


            let t = new ActionRowBuilder().addComponents(namet);

            modal.addComponents(t);

            await interaction.showModal(modal);
            let response = await interaction.awaitModalSubmit({ time: 300000 });

        
            let tt = response.fields.getTextInputValue('namer');

    const used = await prooms.findOne({
      days: selectedValue,
    });
if (tt) {
  const filter = { user: interaction.user.id };
  const update = { $set: { message: interaction.message.id, channel: interaction.channel.id, package: selectedValue, name: tt, price: used.price } };
  const options = { new: true, upsert: true };
  const scccv = await buyofr.findOneAndUpdate(filter, update, options);
let tax = Math.floor(used.price * (20) / (19) + (1))
const smv = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setLabel("استعمال كود خصم")
      .setStyle(2)
      .setCustomId("gsm"),
);



     const trs = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .setDescription(`Please Send \`\`\`c 1037036813182836808 ${tax}\`\`\` Credits to <@1037036813182836808>`)
	.setFooter({ text: 'غير مسؤولين لتحويلك خارج هذا التذكرة او تحويل لشخص اخر', iconURL: client.user.displayAvatarURL({dynamic: true}) });
   interaction.message.edit({embeds: [trs],components: [smv]})
       const yt = new EmbedBuilder()
         .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
  .setDescription(`تم اختيار ${selectedValue}يوم `)
     
    response.reply({ embeds: [yt] , ephemeral: true})       
}
setTimeout(async () => {

    const can = await tickets.findOne({
      channelId: interaction.channel.id,
    });

  const userticketi = can.user;
    const userticket = interaction.guild.members.cache.get(userticketi);

const moment = require('moment-timezone');
    const saudiArabiaTimezone = 'Asia/Riyadh';
    const currentTime = moment().tz(saudiArabiaTimezone).format('D / M / YYYY : h:mm A').replace('AM', 'ص').replace('PM', 'م');

    const trs = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .setDescription(`تم إلغاء العملية.`);
    await interaction.channel.send({ embeds: [trs], ephemeral: true });

    const { generateTranscript } = require('reconlx');
    const channel = interaction.channel;
    const transcriptChannelID = finder.trans;
    const transcriptChannel = interaction.guild.channels.cache.get(transcriptChannelID);
    const msgs = await getMessages(channel);
    const transcript = await generateTranscript({ messages: msgs.reverse(), guild: interaction.guild, channel: channel });
    const html = transcript.toString();
    const transcriptBuffer = Buffer.from(html, "utf-8");
    const attachment = new AttachmentBuilder(transcriptBuffer, { name: `${interaction.channel.name}.html` });

    const trans = new EmbedBuilder()
      .setThumbnail(interaction.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }))
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .addFields({
        name: "Owner Ticket :",
        value: `${userticket}`,
        inline: true,
      }, {
        name: "Ticket Name :",
        value: `${interaction.channel.name}`,
        inline: true,
      }, {
        name: "Closed Ticket By :",
        value: `عمليه غير ناجحه`,
        inline: true,
      }, {
        name: "Ticket Closure Date :",
        value: `${currentTime}`,
        inline: true,
      }, {
        name: "Ticket Type :",
        value: `شراء نيتروهات`,
        inline: true,
      })


    if (transcriptChannel && attachment) {
      await transcriptChannel.send({ embeds: [trans], files: [attachment] });
    }

    const lite = await buyofr.findOne({
      channelId: interaction.channel.id,
    });

        const data = await tickets.findById(can._id);
  const llite = await buyofr.findById(lite._id);
        if (data) {
          await data.delete();
     await llite.delete();
        }
        await interaction.channel.delete();
}, 300000);      

        }
    }
}

const pnitros = require("../../models/tnitro");
const nitros = require("../../models/pnitro");

if (selectID === 'nitrosf') {
  if (interaction.values && interaction.values.length > 0) {
    const selectedValue = interaction.values[0]; 
    if (selectedValue === 'cancel') {
      const can = await tickets.findOne({
        channelId: interaction.channel.id,
      });

      const moment = require('moment-timezone');
      const saudiArabiaTimezone = 'Asia/Riyadh';
      const currentTime = moment().tz(saudiArabiaTimezone).format('D / M / YYYY : h:mm A').replace('AM', 'ص').replace('PM', 'م');
      interaction.message.edit({components: []});
      
      const close = new EmbedBuilder()
        .setColor(find.color)
        .setDescription(`سيتم اغلاق التذكره خلال 5 ثواني`);
      await interaction.message.reply({ embeds: [close], ephemeral: false });

      const trs = new EmbedBuilder()
        .setColor(find.color)
        .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
        .setDescription(`تم إلغاء العملية.`);
      await interaction.reply({ embeds: [trs], ephemeral: true });

      setTimeout(async () => {
        try {
          const { generateTranscript } = require('reconlx');
          const channel = interaction.channel;
          const transcriptChannelID = finder.trans;
          const transcriptChannel = interaction.guild.channels.cache.get(transcriptChannelID);
          
          const cl = await clarm.findOne({
            channelId: interaction.channel.id,
          });
          const userticketi = can.user;
          const userticket = interaction.guild.members.cache.get(userticketi);

          const msgs = await getMessages(channel);
          const transcript = await generateTranscript({ messages: msgs.reverse(), guild: interaction.guild, channel: channel });
          const html = transcript.toString();
          const transcriptBuffer = Buffer.from(html, "utf-8");
          const attachment = new AttachmentBuilder(transcriptBuffer, { name: `${interaction.channel.name}.html` });

          const trans = new EmbedBuilder()
            .setThumbnail(interaction.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }))
            .setColor(find.color)
            .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
            .addFields(
              { name: "Owner Ticket :", value: `${userticket}`, inline: true },
              { name: "Ticket Name :", value: `${interaction.channel.name}`, inline: true },
              { name: "Closed Ticket By :", value: `تم إلغاء العملية.`, inline: true },
              { name: "Ticket Closure Date :", value: `${currentTime}`, inline: true },
              { name: "Ticket Type :", value: `شراء نيتروهات`, inline: true }
            );

          if (transcriptChannel && attachment) {
            await transcriptChannel.send({ embeds: [trans], files: [attachment] });
          }

          const data = await tickets.findById(can._id);
          if (data) {
            await data.delete();
          }
          await interaction.channel.delete();
        } catch (error) {
          console.error(error);
        }
      }, 5000);
    } else {
      const customModalId = `modal_${Math.floor(Math.random() * 1000000)}`;
      let modal = new ModalBuilder()
        .setCustomId(customModalId)
        .setTitle("x4 System");

      let numnitro = new TextInputBuilder()
        .setCustomId("numbernitro")
        .setLabel("عدد النيتروهات")
        .setPlaceholder("اكتب هنا عدد النيتروهات")
        .setStyle(TextInputStyle.Short)
        .setRequired(true);

      let t = new ActionRowBuilder().addComponents(numnitro);
      modal.addComponents(t);

      await interaction.showModal(modal);
      let response = await interaction.awaitModalSubmit({ time: 300000 });

      let tt = response.fields.getTextInputValue('numbernitro');

      if (!/^\d+$/.test(tt)) {
		          const selectMenu = interaction.message.components[0].components[0];

        await interaction.message.edit({
          components: [new ActionRowBuilder().addComponents(selectMenu)],
        });
        return response.reply({ content: 'الرجاء إدخال رقم صالح لعدد النيتروهات.', ephemeral: true });

      }

      const used = await pnitros.findOne({
        type: selectedValue,
      });


      const stock = await nitros.countDocuments({
        type: selectedValue,
      });

      if (parseInt(tt) > stock) {
		          const selectMenu = interaction.message.components[0].components[0];

        await interaction.message.edit({
          components: [new ActionRowBuilder().addComponents(selectMenu)],
        });
        return response.reply({ content: `المخزون المتاح هو ${stock}. الرجاء إدخال كمية صحيحة.`, ephemeral: true });
      }

      if (tt) {
        const filter = { user: interaction.user.id };
        const update = { $set: { message: interaction.message.id, channel: interaction.channel.id, package: selectedValue, count: tt, price: used.price * parseInt(tt) } };
        const options = { new: true, upsert: true };
        const scccv = await buyofr.findOneAndUpdate(filter, update, options);
        let tax = Math.floor((used.price * parseInt(tt)) * (20) / (19) + (1));
        const smv = new ActionRowBuilder().addComponents(
          new ButtonBuilder()
            .setLabel("استعمال كود خصم")
            .setStyle(2)
            .setCustomId("gsm"),
        );

        const trs = new EmbedBuilder()
          .setColor(find.color)
          .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
          .setDescription(`Please Send \`\`\`c 1037036813182836808 ${tax}\`\`\` Credits to <@1037036813182836808>`)
          .setFooter({ text: 'غير مسؤولين لتحويلك خارج هذا التذكرة او تحويل لشخص اخر', iconURL: client.user.displayAvatarURL({dynamic: true}) });
        interaction.message.edit({embeds: [trs],components: [smv]});


  
   
      interaction.channel.permissionOverwrites.edit(interaction.user.id, { SendMessages: true });
        const yt = new EmbedBuilder()
          .setColor(find.color)
          .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
          .setDescription(`تم اختيار ${selectedValue}`);
        
        response.reply({ embeds: [yt] , ephemeral: true });
      }

      setTimeout(async () => {
        const can = await tickets.findOne({
          channelId: interaction.channel.id,
        });

        const userticketi = can.user;
        const userticket = interaction.guild.members.cache.get(userticketi);

        const moment = require('moment-timezone');
        const saudiArabiaTimezone = 'Asia/Riyadh';
        const currentTime = moment().tz(saudiArabiaTimezone).format('D / M / YYYY : h:mm A').replace('AM', 'ص').replace('PM', 'م');

        const trs = new EmbedBuilder()
          .setColor(find.color)
          .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
          .setDescription(`تم إلغاء العملية.`);
        await interaction.channel.send({ embeds: [trs], ephemeral: true });

        const { generateTranscript } = require('reconlx');
        const channel = interaction.channel;
        const transcriptChannelID = finder.trans;
        const transcriptChannel = interaction.guild.channels.cache.get(transcriptChannelID);
        const msgs = await getMessages(channel);
        const transcript = await generateTranscript({ messages: msgs.reverse(), guild: interaction.guild, channel: channel });
        const html = transcript.toString();
        const transcriptBuffer = Buffer.from(html, "utf-8");
        const attachment = new AttachmentBuilder(transcriptBuffer, { name: `${interaction.channel.name}.html` });

        const trans = new EmbedBuilder()
          .setThumbnail(interaction.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }))
          .setColor(find.color)
          .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
          .addFields(
            { name: "Owner Ticket :", value: `${userticket}`, inline: true },
            { name: "Ticket Name :", value: `${interaction.channel.name}`, inline: true },
            { name: "Closed Ticket By :", value: `عمليه غير ناجحه`, inline: true },
            { name: "Ticket Closure Date :", value: `${currentTime}`, inline: true },
            { name: "Ticket Type :", value: `شراء نيتروهات`, inline: true }
          );

        if (transcriptChannel && attachment) {
          await transcriptChannel.send({ embeds: [trans], files: [attachment] });
        }

        const lite = await buyofr.findOne({
          channelId: interaction.channel.id,
        });

        const data = await tickets.findById(can._id);
        const llite = await buyofr.findById(lite._id);
        if (data) {
          await data.delete();
          await llite.delete();
        }
        await interaction.channel.delete();
      }, 300000);      
    }
  }
}


 if (selectID === 'upsf') {
    if (interaction.values && interaction.values.length > 0) {
        const selectedValue = interaction.values[0]; 
        if (selectedValue === 'cancel') {
  
    
    const can = await tickets.findOne({
      channelId: interaction.channel.id,
    });

const moment = require('moment-timezone');

    const saudiArabiaTimezone = 'Asia/Riyadh';
    const currentTime = moment().tz(saudiArabiaTimezone).format('D / M / YYYY : h:mm A').replace('AM', 'ص').replace('PM', 'م');
   interaction.message.edit({components: []})
    const close = new EmbedBuilder()
      .setColor(find.color)
      .setDescription(`سيتم اغلاق التذكره خلال 5 ثواني`);
   
    await interaction.message.reply({ embeds: [close], ephemeral: false });
    const trs = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .setDescription(`تم إلغاء العملية.`);
    await interaction.reply({ embeds: [trs], ephemeral: true });
    setTimeout(async () => {
      try {

    const { generateTranscript } = require('reconlx');
    const channel = interaction.channel;
    const transcriptChannelID = finder.trans;
    const transcriptChannel = interaction.guild.channels.cache.get(transcriptChannelID);
    

        const cl = await clarm.findOne({
      channelId: interaction.channel.id,
    });
    const userticketi = can.user;
    const userticket = interaction.guild.members.cache.get(userticketi);



    const msgs = await getMessages(channel);
    const transcript = await generateTranscript({ messages: msgs.reverse(), guild: interaction.guild, channel: channel });
    const html = transcript.toString();
    const transcriptBuffer = Buffer.from(html, "utf-8");
    const attachment = new AttachmentBuilder(transcriptBuffer, { name: `${interaction.channel.name}.html` });

    const trans = new EmbedBuilder()
      .setThumbnail(interaction.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }))
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .addFields({
        name: "Owner Ticket :",
        value: `${userticket}`,
        inline: true,
      }, {
        name: "Ticket Name :",
        value: `${interaction.channel.name}`,
        inline: true,
      }, {
        name: "Closed Ticket By :",
        value: `تم إلغاء العملية.`,
        inline: true,
      }, {
        name: "Ticket Closure Date :",
        value: `${currentTime}`,
        inline: true,
      }, {
        name: "Ticket Type :",
        value: `شراء اب تايم`,
        inline: true,
      })


    if (transcriptChannel && attachment) {
      await transcriptChannel.send({ embeds: [trans], files: [attachment] });
    }


        const data = await tickets.findById(can._id);
        if (data) {
          await data.delete();
        }
        await interaction.channel.delete();
      } catch (error) {
        console.error(error);
      }
    }, 5000);
        } else {
const customModalId = `modal_${Math.floor(Math.random() * 1000000)}`;
            let modal = new ModalBuilder()
                  .setCustomId(customModalId)
                .setTitle("x4 System");



            let namet = new TextInputBuilder()
                .setCustomId("namer")
                .setLabel("رابط اب تايم")
                .setPlaceholder("اكتب الرابط  الخاص بالبروجكت (يمكنك تغيرو فيما بعد)")
                .setStyle(TextInputStyle.Short)
                .setRequired(true);


            let t = new ActionRowBuilder().addComponents(namet);

            modal.addComponents(t);

            await interaction.showModal(modal);
            let response = await interaction.awaitModalSubmit({ time: 300000 });

        
            let tt = response.fields.getTextInputValue('namer');

    const used = await upps.findOne({
      days: selectedValue,
    });
if (tt) {
  const filter = { user: interaction.user.id };
  const update = { $set: { message: interaction.message.id, channel: interaction.channel.id, package: selectedValue, name: tt, price: used.price } };
  const options = { new: true, upsert: true };
  const scccv = await buyofr.findOneAndUpdate(filter, update, options);
let tax = Math.floor(used.price * (20) / (19) + (1))
const smv = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setLabel("استعمال كود خصم")
      .setStyle(2)
      .setCustomId("gsm"),
);



     const trs = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .setDescription(`Please Send \`\`\`c 1037036813182836808 ${tax}\`\`\` Credits to <@1037036813182836808>`)
	.setFooter({ text: 'غير مسؤولين لتحويلك خارج هذا التذكرة او تحويل لشخص اخر', iconURL: client.user.displayAvatarURL({dynamic: true}) });
   interaction.message.edit({embeds: [trs],components: [smv]})
        interaction.channel.permissionOverwrites.edit(interaction.user.id, { SendMessages: true });
       const yt = new EmbedBuilder()
         .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
  .setDescription(`تم اختيار ${selectedValue}يوم `)
     
    response.reply({ embeds: [yt] , ephemeral: true})       
}
setTimeout(async () => {

    const can = await tickets.findOne({
      channelId: interaction.channel.id,
    });

  const userticketi = can.user;
    const userticket = interaction.guild.members.cache.get(userticketi);

const moment = require('moment-timezone');
    const saudiArabiaTimezone = 'Asia/Riyadh';
    const currentTime = moment().tz(saudiArabiaTimezone).format('D / M / YYYY : h:mm A').replace('AM', 'ص').replace('PM', 'م');

    const trs = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .setDescription(`تم إلغاء العملية.`);
    await interaction.channel.send({ embeds: [trs], ephemeral: true });

    const { generateTranscript } = require('reconlx');
    const channel = interaction.channel;
    const transcriptChannelID = finder.trans;
    const transcriptChannel = interaction.guild.channels.cache.get(transcriptChannelID);
    const msgs = await getMessages(channel);
    const transcript = await generateTranscript({ messages: msgs.reverse(), guild: interaction.guild, channel: channel });
    const html = transcript.toString();
    const transcriptBuffer = Buffer.from(html, "utf-8");
    const attachment = new AttachmentBuilder(transcriptBuffer, { name: `${interaction.channel.name}.html` });

    const trans = new EmbedBuilder()
      .setThumbnail(interaction.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }))
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .addFields({
        name: "Owner Ticket :",
        value: `${userticket}`,
        inline: true,
      }, {
        name: "Ticket Name :",
        value: `${interaction.channel.name}`,
        inline: true,
      }, {
        name: "Closed Ticket By :",
        value: `عمليه غير ناجحه`,
        inline: true,
      }, {
        name: "Ticket Closure Date :",
        value: `${currentTime}`,
        inline: true,
      }, {
        name: "Ticket Type :",
        value: `شراء اب تايم`,
        inline: true,
      })


    if (transcriptChannel && attachment) {
      await transcriptChannel.send({ embeds: [trans], files: [attachment] });
    }

    const lite = await buyofr.findOne({
      channelId: interaction.channel.id,
    });

        const data = await tickets.findById(can._id);
  const llite = await buyofr.findById(lite._id);
        if (data) {
          await data.delete();
     await llite.delete();
        }
        await interaction.channel.delete();
}, 300000);      

        }
    }
}
 if (selectID === 'postsf') {
    if (interaction.values && interaction.values.length > 0) {
        const selectedValue = interaction.values[0]; 
        if (selectedValue === 'cancel') {
  
    
    const can = await tickets.findOne({
      channelId: interaction.channel.id,
    });

const moment = require('moment-timezone');

    const saudiArabiaTimezone = 'Asia/Riyadh';
    const currentTime = moment().tz(saudiArabiaTimezone).format('D / M / YYYY : h:mm A').replace('AM', 'ص').replace('PM', 'م');
   interaction.message.edit({components: []})
    const close = new EmbedBuilder()
      .setColor(find.color)
      .setDescription(`سيتم اغلاق التذكره خلال 5 ثواني`);
   
    await interaction.message.reply({ embeds: [close], ephemeral: false });
    const trs = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .setDescription(`تم إلغاء العملية.`);
    await interaction.reply({ embeds: [trs], ephemeral: true });
    setTimeout(async () => {
      try {

    const { generateTranscript } = require('reconlx');
    const channel = interaction.channel;
    const transcriptChannelID = finder.trans;
    const transcriptChannel = interaction.guild.channels.cache.get(transcriptChannelID);
    

        const cl = await clarm.findOne({
      channelId: interaction.channel.id,
    });
    const userticketi = can.user;
    const userticket = interaction.guild.members.cache.get(userticketi);



    const msgs = await getMessages(channel);
    const transcript = await generateTranscript({ messages: msgs.reverse(), guild: interaction.guild, channel: channel });
    const html = transcript.toString();
    const transcriptBuffer = Buffer.from(html, "utf-8");
    const attachment = new AttachmentBuilder(transcriptBuffer, { name: `${interaction.channel.name}.html` });

    const trans = new EmbedBuilder()
      .setThumbnail(interaction.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }))
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .addFields({
        name: "Owner Ticket :",
        value: `${userticket}`,
        inline: true,
      }, {
        name: "Ticket Name :",
        value: `${interaction.channel.name}`,
        inline: true,
      }, {
        name: "Closed Ticket By :",
        value: `تم إلغاء العملية.`,
        inline: true,
      }, {
        name: "Ticket Closure Date :",
        value: `${currentTime}`,
        inline: true,
      }, {
        name: "Ticket Type :",
        value: `شراء منشور مميز`,
        inline: true,
      })


    if (transcriptChannel && attachment) {
      await transcriptChannel.send({ embeds: [trans], files: [attachment] });
    }


        const data = await tickets.findById(can._id);
        if (data) {
          await data.delete();
        }
        await interaction.channel.delete();
      } catch (error) {
        console.error(error);
      }
    }, 5000);
	
        } else {
const customModalId = `modal_${Math.floor(Math.random() * 1000000)}`;
            let modal = new ModalBuilder()
                  .setCustomId(customModalId)
                .setTitle("x4 System");



            let namet = new TextInputBuilder()
                .setCustomId("namer")
                .setLabel("المنشور")
                .setPlaceholder(" اكتب منشورك هنا بدون اضافات البوت يعمل بشكل تلقائي")
                .setStyle(TextInputStyle.Paragraph)
                .setRequired(true);


            let t = new ActionRowBuilder().addComponents(namet);

            modal.addComponents(t);

            await interaction.showModal(modal);
            let response = await interaction.awaitModalSubmit({ time: 300000 });

        
            let tt = response.fields.getTextInputValue('namer');

    const used = await postps.findOne({
      type: selectedValue,
    });
if (tt) {
  const filter = { user: interaction.user.id };
  const update = { $set: { message: interaction.message.id, channel: interaction.channel.id, package: selectedValue, name: tt, price: used.price } };
  const options = { new: true, upsert: true };
  const scccv = await buyofr.findOneAndUpdate(filter, update, options);
let tax = Math.floor(used.price * (20) / (19) + (1))
const smv = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setLabel("استعمال كود خصم")
      .setStyle(2)
      .setCustomId("gsm"),
);

     const trs = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .setDescription(`Please Send \`\`\`c 1037036813182836808 ${tax}\`\`\` Credits to <@1037036813182836808>`)
	.setFooter({ text: 'غير مسؤولين لتحويلك خارج هذا التذكرة او تحويل لشخص اخر', iconURL: client.user.displayAvatarURL({dynamic: true}) });
   interaction.message.edit({embeds: [trs],components: [smv]})
       const yt = new EmbedBuilder()
         .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
  .setDescription(`تم اختيار منشور من نوع ${selectedValue}`)
     
    response.reply({ embeds: [yt] , ephemeral: true})       
}
setTimeout(async () => {

    const can = await tickets.findOne({
      channelId: interaction.channel.id,
    });

  const userticketi = can.user;
    const userticket = interaction.guild.members.cache.get(userticketi);

const moment = require('moment-timezone');
    const saudiArabiaTimezone = 'Asia/Riyadh';
    const currentTime = moment().tz(saudiArabiaTimezone).format('D / M / YYYY : h:mm A').replace('AM', 'ص').replace('PM', 'م');

    const trs = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .setDescription(`تم إلغاء العملية.`);
    await interaction.channel.send({ embeds: [trs], ephemeral: true });
    const { generateTranscript } = require('reconlx');
    const channel = interaction.channel;
    const transcriptChannelID = finder.trans;
    const transcriptChannel = interaction.guild.channels.cache.get(transcriptChannelID);
    const msgs = await getMessages(channel);
    const transcript = await generateTranscript({ messages: msgs.reverse(), guild: interaction.guild, channel: channel });
    const html = transcript.toString();
    const transcriptBuffer = Buffer.from(html, "utf-8");
    const attachment = new AttachmentBuilder(transcriptBuffer, { name: `${interaction.channel.name}.html` });

    const trans = new EmbedBuilder()
      .setThumbnail(interaction.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }))
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .addFields({
        name: "Owner Ticket :",
        value: `${userticket}`,
        inline: true,
      }, {
        name: "Ticket Name :",
        value: `${interaction.channel.name}`,
        inline: true,
      }, {
        name: "Closed Ticket By :",
        value: `عمليه غير ناجحه`,
        inline: true,
      }, {
        name: "Ticket Closure Date :",
        value: `${currentTime}`,
        inline: true,
      }, {
        name: "Ticket Type :",
        value: `شراء منشور مميز`,
        inline: true,
      })


    if (transcriptChannel && attachment) {
      await transcriptChannel.send({ embeds: [trans], files: [attachment] });
    }

    const lite = await buyofr.findOne({
      channelId: interaction.channel.id,
    });

        const data = await tickets.findById(can._id);
  const llite = await buyofr.findById(lite._id);
        if (data) {
          await data.delete();
     await llite.delete();
        }
        await interaction.channel.delete();
}, 300000);      

        }
    }
}

const accounts = require("../../models/account"); 

if (selectID === 'accountshop') {
  if (interaction.values && interaction.values.length > 0) {
    const selectedValue = interaction.values[0];

    if (selectedValue === 'cancel') {
      const can = await tickets.findOne({ channelId: interaction.channel.id });
      const moment = require('moment-timezone');
      const saudiArabiaTimezone = 'Asia/Riyadh';
      const currentTime = moment().tz(saudiArabiaTimezone).format('D / M / YYYY : h:mm A').replace('AM', 'ص').replace('PM', 'م');

      interaction.message.edit({ components: [] });

      const close = new EmbedBuilder()
        .setColor(find.color)
        .setDescription('سيتم إغلاق التذكرة خلال 5 ثواني');
      await interaction.message.reply({ embeds: [close], ephemeral: false });

      const trs = new EmbedBuilder()
        .setColor(find.color)
        .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
        .setDescription('تم إلغاء العملية.');
      await interaction.reply({ embeds: [trs], ephemeral: true });

      setTimeout(async () => {
        try {
          const { generateTranscript } = require('reconlx');
          const channel = interaction.channel;
          const transcriptChannelID = finder.trans;
          const transcriptChannel = interaction.guild.channels.cache.get(transcriptChannelID);
          const cl = await clarm.findOne({ channelId: interaction.channel.id });
          const userticketi = can.user;
          const userticket = interaction.guild.members.cache.get(userticketi);
          const msgs = await getMessages(channel);
          const transcript = await generateTranscript({ messages: msgs.reverse(), guild: interaction.guild, channel: channel });
          const html = transcript.toString();
          const transcriptBuffer = Buffer.from(html, "utf-8");
          const attachment = new AttachmentBuilder(transcriptBuffer, { name: `${interaction.channel.name}.html` });

          const trans = new EmbedBuilder()
            .setThumbnail(interaction.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }))
            .setColor(find.color)
            .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
          .addFields({
        name: "Owner Ticket :",
        value: `${userticket}`,
        inline: true,
      }, {
        name: "Ticket Name :",
        value: `${interaction.channel.name}`,
        inline: true,
      }, {
        name: "Closed Ticket By :",
        value: `تم إلغاء العملية.`,
        inline: true,
      }, {
        name: "Ticket Closure Date :",
        value: `${currentTime}`,
        inline: true,
      }, {
        name: "Ticket Type :",
        value: `شراء حساب`,
        inline: true,
      })
          if (transcriptChannel && attachment) {
            await transcriptChannel.send({ embeds: [trans], files: [attachment] });
          }

          const data = await tickets.findById(can._id);
          if (data) {
            await data.delete();
          }
          await interaction.channel.delete();
        } catch (error) {
          console.error(error);
        }
      }, 5000);
    } else {
      const [platform] = selectedValue.split('-');
      const accountsData = await accounts.find({ platform });

      if (accountsData.length === 0) {
        const noAccountsEmbed = new EmbedBuilder()
          .setColor(find.color)
          .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
          .setDescription('لا توجد حسابات متاحة في قاعدة البيانات حاليًا. نعتذر عن الإزعاج.');
        return interaction.reply({ embeds: [noAccountsEmbed], ephemeral: true });
      }

      const accountOptions = accountsData.map((account, index) => ({
        label: `${platform}`,
        description: `$${account.price} `,
        value: account._id.toString(),
      }));

      accountOptions.push({
        label: "العودة للقائمة السابقة",
        description: "العودة لاختيار المنصة",
        value: "back"
      });

      accountOptions.push({
        label: "إلغاء - ❌",
        description: "إلغاء شراء الحساب (إغلاق التذكرة)",
        value: "cancel"
      });

      const row = new ActionRowBuilder().addComponents(
        new SelectMenuBuilder()
          .setCustomId('select_account')
          .setPlaceholder('اختر حساباً.')
          .setMinValues(1)
          .setMaxValues(accountOptions.length - 2)
          .addOptions(accountOptions)
      );

      const accountsEmbed = new EmbedBuilder()
        .setColor(find.color)
        .setTitle('الحسابات المتاحة')
        .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
        .setDescription('اختر الحسابات التي تريد شراءها:')
        .setTimestamp();

      await interaction.update({ embeds: [accountsEmbed], components: [row] });
    }
  }
}
if (selectID === 'select_account') {
  if (interaction.values && interaction.values.length > 0) {
 
    const selectedAccountIds = interaction.values.flatMap(id => id.split(',')).filter(id => id);

    if (selectedAccountIds.includes('z')) {
  
      const selectedVinderIds = selectedAccountIds.filter(id => id !== 'z');

      if (selectedVinderIds.length > 0) {
        try {
          const accountsList = await accounts.find({
            vinder: { $in: selectedVinderIds },
            additional_info: { $exists: true, $ne: "" }
          });

          let infoText = "";
          let accountNumber = 1;

          for (const account of accountsList) {
            infoText += `**${accountNumber}. ${account.platform} Account Details:**\n`;
            infoText += `Price: $${Math.floor(account.price)}\n`;

            if (account.additional_info) {
              infoText += `Additional Info: ${account.additional_info}\n`;
            }

            if (account.image_url) {
              infoText += `Image: [View Image](${account.image_url})\n`;
            }

            infoText += "\n";
            accountNumber++;
          }

          const infoEmbed = new EmbedBuilder()
            .setColor(find.color)
            .setTitle("تفاصيل الحسابات المحددة")
            .setDescription(infoText)
            .setTimestamp();

          await interaction.reply({ embeds: [infoEmbed], ephemeral: true });
        } catch (error) {

          await interaction.reply({ content: "حدث خطأ أثناء جلب المعلومات الإضافية والصور. حاول مرة أخرى.", ephemeral: true });
        }
	  }
	} else if (selectedAccountIds.includes('b')) {

  const selectedVinderIds = selectedAccountIds.filter(id => id !== 'b');

  if (selectedVinderIds.length > 0) {

    try {
      const accountsList = await accounts.find({
        vinder: { $in: selectedVinderIds }
      });

      let infoText = "";
      let accountNumber = 1;
      let totalPrice = 0; 

      for (const account of accountsList) {
        const price = Math.floor(account.price);
        infoText += `**${accountNumber}. ${account.platform} Account Details:**\n`;
        infoText += `Price: $${price}\n`;
        infoText += "\n";
        totalPrice += price;
        accountNumber++;
      }

      const tax = Math.floor(totalPrice * (20) / (19) + (1)); 


      infoText += `\n**Total Price:** $${totalPrice}`;
      infoText += `\n**Total with Tax:** $${tax}`;

      const infoEmbed = new EmbedBuilder()
        .setColor(find.color)
        .setTitle("تفاصيل الحسابات المحددة")
        .setDescription(infoText)
        .setTimestamp();

      await interaction.reply({ embeds: [infoEmbed], ephemeral: true });

      const filter = { user: interaction.user.id };
      const update = { 
        $set: { 
          message: interaction.message.id, 
          channel: interaction.channel.id, 
          accounts: selectedVinderIds, 
          price: totalPrice 
        } 
      };
      const options = { new: true, upsert: true };
      const scccv = await buyofr.findOneAndUpdate(filter, update, options);

      const smv = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setLabel("استعمال كود خصم")
          .setStyle(2)
          .setCustomId("gsm")
      );

      const trs = new EmbedBuilder()
        .setColor(find.color)
        .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
        .setDescription(`Please Send \`\`\`c 1037036813182836808 ${tax}\`\`\` Credits to <@1037036813182836808>`)
        .setFooter({ text: 'غير مسؤولين لتحويلك خارج هذا التذكرة او تحويل لشخص اخر', iconURL: client.user.displayAvatarURL({dynamic: true}) });

      interaction.message.edit({embeds: [trs], components: [smv]});
     interaction.channel.permissionOverwrites.edit(interaction.user.id, { SendMessages: true });
    } catch (error) {
      console.error("Error fetching accounts:", error);
      await interaction.reply({ content: "حدث خطأ أثناء جلب الحسابات. حاول مرة أخرى.", ephemeral: true });
    }

    setTimeout(async () => {
      try {
        const can = await tickets.findOne({ channelId: interaction.channel.id });
        const userticketi = can.user;
        const userticket = interaction.guild.members.cache.get(userticketi);

        const moment = require('moment-timezone');
        const saudiArabiaTimezone = 'Asia/Riyadh';
        const currentTime = moment().tz(saudiArabiaTimezone).format('D / M / YYYY : h:mm A').replace('AM', 'ص').replace('PM', 'م');

        const trs = new EmbedBuilder()
          .setColor(find.color)
          .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
          .setDescription(`تم إلغاء العملية.`);
        await interaction.channel.send({ embeds: [trs], ephemeral: true });

        const { generateTranscript } = require('reconlx');
        const channel = interaction.channel;
        const transcriptChannelID = finder.trans;
        const transcriptChannel = interaction.guild.channels.cache.get(transcriptChannelID);
        const msgs = await getMessages(channel);
        const transcript = await generateTranscript({ messages: msgs.reverse(), guild: interaction.guild, channel: channel });
        const html = transcript.toString();
        const transcriptBuffer = Buffer.from(html, "utf-8");
        const attachment = new AttachmentBuilder(transcriptBuffer, { name: `${interaction.channel.name}.html` });

        const trans = new EmbedBuilder()
          .setThumbnail(interaction.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }))
          .setColor(find.color)
          .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
          .addFields(
            { name: "Owner Ticket :", value: `${userticket}`, inline: true },
            { name: "Ticket Name :", value: `${interaction.channel.name}`, inline: true },
            { name: "Closed Ticket By :", value: `عمليه غير ناجحه`, inline: true },
            { name: "Ticket Closure Date :", value: `${currentTime}`, inline: true },
            { name: "Ticket Type :", value: `شراء حسابات`, inline: true }
          );

        if (transcriptChannel && attachment) {
          await transcriptChannel.send({ embeds: [trans], files: [attachment] });
        }

        const lite = await buyofr.findOne({ channelId: interaction.channel.id });
        const data = await tickets.findById(can._id);
        const llite = await buyofr.findById(lite._id);

        if (data) {
          await data.delete();
          await llite.delete();
        }

        await interaction.channel.delete();
      } catch (error) {
        console.error("Error closing the ticket:", error);
      }
    }, 300000);
  }

    } else if (selectedAccountIds.includes('back')) {
      try {
        const accountsData = await accounts.find({});
        const accountsMap = new Map();

        accountsData.forEach((account) => {
          const key = `${account.platform}`;
          if (accountsMap.has(key)) {
            accountsMap.get(key).push(account);
          } else {
            accountsMap.set(key, [account]);
          }
        });

        const selectMenuOptions = [];
        accountsMap.forEach((accounts, key) => {
          const [platform] = key.split('-');
          selectMenuOptions.push({
            label: `Platform: ${platform}`,
            description: accounts.length > 1 ? `in Stock: ${accounts.length} حسابات` : 'حساب واحد',
            value: key,
          });
        });

        selectMenuOptions.push({
          label: "إلغاء - ❌",
          description: "إلغاء شراء حساب (إغلاق التذكرة)",
          value: "cancel",
        });

        const row = new ActionRowBuilder().addComponents(
          new SelectMenuBuilder()
            .setCustomId('accountshop')
            .setPlaceholder('اختر المنصة.')
            .setMinValues(1)
            .setMaxValues(1)
            .addOptions(selectMenuOptions)
        );

        const accountsEmbed = new EmbedBuilder()
          .setColor(find.color)
          .setTitle('اختر المنصة')
          .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
          .setDescription('اختر المنصة التي تريد شراء حساب منها:')
          .setTimestamp();

        await interaction.update({ embeds: [accountsEmbed], components: [row] });
      } catch (error) {
        console.error("Error handling 'back' option:", error);
      }
    } else if (selectedAccountIds.includes('cancel')) {
      try {
        const can = await tickets.findOne({ channelId: interaction.channel.id });
        const moment = require('moment-timezone');
        const saudiArabiaTimezone = 'Asia/Riyadh';
        const currentTime = moment().tz(saudiArabiaTimezone).format('D / M / YYYY : h:mm A').replace('AM', 'ص').replace('PM', 'م');

        await interaction.message.edit({ components: [] });

        const closeEmbed = new EmbedBuilder()
          .setColor(find.color)
          .setDescription('سيتم إغلاق التذكرة خلال 5 ثواني');
        await interaction.message.reply({ embeds: [closeEmbed], ephemeral: false });

        const cancelEmbed = new EmbedBuilder()
          .setColor(find.color)
          .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
          .setDescription('تم إلغاء العملية.');
        await interaction.reply({ embeds: [cancelEmbed], ephemeral: true });

        setTimeout(async () => {
          try {
            const { generateTranscript } = require('reconlx');
            const channel = interaction.channel;
            const transcriptChannelID = finder.trans;
            const transcriptChannel = interaction.guild.channels.cache.get(transcriptChannelID);
            const cl = await clarm.findOne({ channelId: interaction.channel.id });
            const userticketi = can.user;
            const userticket = interaction.guild.members.cache.get(userticketi);
            const msgs = await getMessages(channel);
            const transcript = await generateTranscript({ messages: msgs.reverse(), guild: interaction.guild, channel: channel });
            const html = transcript.toString();
            const transcriptBuffer = Buffer.from(html, "utf-8");
            const attachment = new AttachmentBuilder(transcriptBuffer, { name: `${interaction.channel.name}.html` });

            const transEmbed = new EmbedBuilder()
              .setThumbnail(interaction.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }))
              .setColor(find.color)
              .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
              .addFields({
                name: "Owner Ticket :",
                value: `${userticket}`,
                inline: true,
              }, {
                name: "Ticket Name :",
                value: `${interaction.channel.name}`,
                inline: true,
              }, {
                name: "Closed Ticket By :",
                value: `تم إلغاء العملية.`,
                inline: true,
              }, {
                name: "Ticket Closure Date :",
                value: `${currentTime}`,
                inline: true,
              }, {
                name: "Ticket Type :",
                value: `شراء حساب`,
                inline: true,
              });

            if (transcriptChannel && attachment) {
              await transcriptChannel.send({ embeds: [transEmbed], files: [attachment] });
            }

            const data = await tickets.findById(can._id);
            if (data) {
              await data.delete();
            }
            await interaction.channel.delete();
          } catch (error) {
            console.error("Error closing the ticket:", error);
          }
        }, 5000);
      } catch (error) {
        console.error("Error handling 'cancel' option:", error);
      }
    } else {
      try {
        let totalPrice = 0;
        const selectedAccounts = [];

        for (const accountId of selectedAccountIds) {
          if (mongoose.Types.ObjectId.isValid(accountId)) {
            const account = await accounts.findById(accountId);
            if (account) {
              selectedAccounts.push(account);
              totalPrice += Math.floor(account.price);
            }
          }
        }

        if (selectedAccounts.length > 0) {
          const selectedAccountsDetails = selectedAccounts.map((account, index) => ({
            name: `Account ${index + 1}`,
            value: `Platform: ${account.platform}\nPrice: $${account.price}\n`,
            inline: false,
          }));

          const summaryEmbed = new EmbedBuilder()
            .setColor(find.color)
            .setTitle('ملخص الحسابات المختارة')
            .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
            .addFields(...selectedAccountsDetails)
            .addFields({ name: 'إجمالي السعر', value: `$${totalPrice}`, inline: false })
            .setTimestamp();

          const hasImages = selectedAccounts.some(account => account.image_url);
          const hasAdditionalInfo = selectedAccounts.some(account => account.additional_info);
          const vinderIds = selectedAccounts.map(account => account.vinder);

          let options = [
            {
              label: "تأكيد الشراء - ✅",
              description: "تأكيد شراء الحسابات المختارة",
              value: vinderIds.join(',') + ",b",
            },
            {
              label: "العودة للقائمة السابقة",
              description: "العودة لاختيار المنصة",
              value: "back",
            },
            {
              label: "إلغاء - ❌",
              description: "إلغاء شراء الحساب (إغلاق التذكرة)",
              value: "cancel",
            }
          ];

          if (hasImages || hasAdditionalInfo) {
            options.splice(1, 0, {
              label: "عرض الصور والمعلومات الإضافية",
              description: "عرض صور ومعلومات الحسابات المتوفرة",
              value: vinderIds.join(',') + ",z",
            });
          }

          const row = new ActionRowBuilder().addComponents(
            new SelectMenuBuilder()
              .setCustomId('select_account')
              .setPlaceholder('حدد اختيارك')
              .addOptions(options)
          );
          await interaction.update({ embeds: [summaryEmbed], components: [row] });
        }
      } catch (error) {
        console.error("Error handling account selection:", error);
      }
    }
  }
}



  if (selectID === 'adssf') {
    if (interaction.values && interaction.values.length > 0) {
        const selectedValue = interaction.values[0]; 
        if (selectedValue === 'cancel') {
  
    
    const can = await tickets.findOne({
      channelId: interaction.channel.id,
    });

const moment = require('moment-timezone');

    const saudiArabiaTimezone = 'Asia/Riyadh';
    const currentTime = moment().tz(saudiArabiaTimezone).format('D / M / YYYY : h:mm A').replace('AM', 'ص').replace('PM', 'م');
   interaction.message.edit({components: []})
    const close = new EmbedBuilder()
      .setColor(find.color)
      .setDescription(`سيتم اغلاق التذكره خلال 5 ثواني`);
   
    await interaction.message.reply({ embeds: [close], ephemeral: false });
    const trs = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .setDescription(`تم إلغاء العملية.`);
    await interaction.reply({ embeds: [trs], ephemeral: true });
    setTimeout(async () => {
      try {

    const { generateTranscript } = require('reconlx');
    const channel = interaction.channel;
    const transcriptChannelID = finder.trans;
    const transcriptChannel = interaction.guild.channels.cache.get(transcriptChannelID);
    

        const cl = await clarm.findOne({
      channelId: interaction.channel.id,
    });
    const userticketi = can.user;
    const userticket = interaction.guild.members.cache.get(userticketi);



    const msgs = await getMessages(channel);
    const transcript = await generateTranscript({ messages: msgs.reverse(), guild: interaction.guild, channel: channel });
    const html = transcript.toString();
    const transcriptBuffer = Buffer.from(html, "utf-8");
    const attachment = new AttachmentBuilder(transcriptBuffer, { name: `${interaction.channel.name}.html` });

    const trans = new EmbedBuilder()
      .setThumbnail(interaction.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }))
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .addFields({
        name: "Owner Ticket :",
        value: `${userticket}`,
        inline: true,
      }, {
        name: "Ticket Name :",
        value: `${interaction.channel.name}`,
        inline: true,
      }, {
        name: "Closed Ticket By :",
        value: `تم إلغاء العملية.`,
        inline: true,
      }, {
        name: "Ticket Closure Date :",
        value: `${currentTime}`,
        inline: true,
      }, {
        name: "Ticket Type :",
        value: `شراء اعلان`,
        inline: true,
      })


    if (transcriptChannel && attachment) {
      await transcriptChannel.send({ embeds: [trans], files: [attachment] });
    }


        const data = await tickets.findById(can._id);
        if (data) {
          await data.delete();
        }
        await interaction.channel.delete();
      } catch (error) {
        console.error(error);
      }
    }, 5000);
        } else {
const customModalId = `modal_${Math.floor(Math.random() * 1000000)}`;
            let modal = new ModalBuilder()
                  .setCustomId(customModalId)
                .setTitle("x4 System");



            let namet = new TextInputBuilder()
                .setCustomId("namer")
                .setLabel("الاعلان")
                .setPlaceholder(" اكتب اعلان الخاص بك هنا بدون اضافات البوت يعمل بشكل تلقائي")
                .setStyle(TextInputStyle.Paragraph)
                .setRequired(true);


            let t = new ActionRowBuilder().addComponents(namet);

            modal.addComponents(t);

            await interaction.showModal(modal);
            let response = await interaction.awaitModalSubmit({ time: 300000 });

        
            let tt = response.fields.getTextInputValue('namer');

    const used = await adsps.findOne({
      package: selectedValue,
    });
let giveawy = "0";
if (selectedValue === "five") {
  giveawy = "500000";
} else if (selectedValue === "four") {
  giveawy = "150000";
} else if (selectedValue === "three") {
  giveawy = "50000";
}

if (tt) {

  const filter = { user: interaction.user.id };
  const update = { $set: { message: interaction.message.id, channel: interaction.channel.id, package: selectedValue, giveawy: giveawy, name: tt, price: used.price } };
  const options = { new: true, upsert: true };
  const scccv = await buyofr.findOneAndUpdate(filter, update, options);
let tax = Math.floor(used.price * (20) / (19) + (1))
const fiv = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setLabel("استعمال كود خصم")
      .setStyle(2)
      .setCustomId("gsm"),
    new ButtonBuilder()
      .setLabel("زيادة الجيفاوي")
      .setStyle(2)
      .setCustomId("plus"),
    new ButtonBuilder()
      .setLabel("اسم الروم ال تبي")
      .setStyle(2)
      .setCustomId("name"),
);

const smv = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setLabel("استعمال كود خصم")
      .setStyle(2)
      .setCustomId("gsm"),
);
     const trs = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .setDescription(`Please Send \`\`\`c 1037036813182836808 ${tax}\`\`\` Credits to <@1037036813182836808>`)
	.setFooter({ text: 'غير مسؤولين لتحويلك خارج هذا التذكرة او تحويل لشخص اخر', iconURL: client.user.displayAvatarURL({dynamic: true}) });
if (selectedValue === "five") {
  interaction.message.edit({embeds: [trs],components: [fiv]})
} else if (selectedValue === "four") {
  interaction.message.edit({embeds: [trs],components: [fiv]})
} else {
  interaction.message.edit({embeds: [trs],components: [smv]})
}
       const yt = new EmbedBuilder()
         .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
  .setDescription(`تم اختيار الاعلان`)
     
    response.reply({ embeds: [yt] , ephemeral: true})       
}
setTimeout(async () => {

    const can = await tickets.findOne({
      channelId: interaction.channel.id,
    });

  const userticketi = can.user;
    const userticket = interaction.guild.members.cache.get(userticketi);
    const categoryId = interaction.guild.channels.cache.get(can.prent);
    const categoryName = categoryId.name;
const moment = require('moment-timezone');
    const saudiArabiaTimezone = 'Asia/Riyadh';
    const currentTime = moment().tz(saudiArabiaTimezone).format('D / M / YYYY : h:mm A').replace('AM', 'ص').replace('PM', 'م');

    const trs = new EmbedBuilder()
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .setDescription(`تم إلغاء العملية.`);
    await interaction.channel.send({ embeds: [trs], ephemeral: true });

    const { generateTranscript } = require('reconlx');
    const channel = interaction.channel;
    const transcriptChannelID = finder.trans;
    const transcriptChannel = interaction.guild.channels.cache.get(transcriptChannelID);
    const msgs = await getMessages(channel);
    const transcript = await generateTranscript({ messages: msgs.reverse(), guild: interaction.guild, channel: channel });
    const html = transcript.toString();
    const transcriptBuffer = Buffer.from(html, "utf-8");
    const attachment = new AttachmentBuilder(transcriptBuffer, { name: `${interaction.channel.name}.html` });

    const trans = new EmbedBuilder()
      .setThumbnail(interaction.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }))
    .setColor(find.color)
       .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
      .addFields({
        name: "Owner Ticket :",
        value: `${userticket}`,
        inline: true,
      }, {
        name: "Ticket Name :",
        value: `${interaction.channel.name}`,
        inline: true,
      }, {
        name: "Closed Ticket By :",
        value: `عمليه غير ناجحه`,
        inline: true,
      }, {
        name: "Ticket Closure Date :",
        value: `${currentTime}`,
        inline: true,
      }, {
        name: "Ticket Type :",
        value:`${categoryName}`,
        inline: true,
      })


    if (transcriptChannel && attachment) {
      await transcriptChannel.send({ embeds: [trans], files: [attachment] });
    }

    const lite = await buyofr.findOne({
      channelId: interaction.channel.id,
    });

        const data = await tickets.findById(can._id);
  const llite = await buyofr.findById(lite._id);
        if (data) {
          await data.delete();
     await llite.delete();
        }
        await interaction.channel.delete();
}, 300000);      

        }
    }
}


async function getMessages(channel) {
  let msgs = [];
  
  const getMsg = async (options = { limit: 100 }) => {
    const messages = await channel.messages.fetch(options);
    msgs = msgs.concat(Array.from(messages.values()));
    if (messages.size === 100) {
      await getMsg({ limit: 100, before: messages.last().id });
    }
  }

  await getMsg();
  return msgs;
}
  } else if (interaction.isChatInputCommand() || interaction.isMessageContextMenuCommand() || interaction.isUserContextMenuCommand() || interaction.isModalSubmit()) {
    handleCommand(interaction);
  } else if (interaction.isCommand()) {
    const command = client.slash_commands.get(interaction.commandName);
    if (!command) return;
    try {
      command.run(client, interaction, config);
    } catch (e) {
      console.error(e);
    }
  } else if (interaction.isMessageComponent()) {
    try {
      const component = client.message_components.get(interaction.customId);
      if (component) component.run(client, interaction, config);
    } catch (e) {
      console.error(e);
    }
  } else {
    console.log(`Invalid interaction type: ${interaction.type}`);
  }
});
