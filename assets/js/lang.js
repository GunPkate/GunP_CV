
var arrLang = new Array();
arrLang['en'] = new Array();
arrLang['jp'] = new Array();

// English content
arrLang['en']['home'] = 'Home';
arrLang['en']['h1name'] = 'Gun Puengkatesoontorn';
arrLang['en']['h1intro'] = `I have passion for business and coding. I put my work experience and knowledge into action
						                in order to deploy creative strategies and work more efficiently. `;
arrLang['en']['h3main'] = 'Experience and Skills';
arrLang['en']['about'] = 'About Me';
//arrLang['en']['desc'] = 'This is my description';

// content (Other Language) 
arrLang['jp']['h1name'] = 'ガン 　プンケイスートーン';
arrLang['jp']['h1intro'] = `プログラミングとビジネス成長しているように`;
arrLang['jp']['h3main'] = '経験とスキル';
arrLang['jp']['about'] = '私の経験';
//arrLang['km']['desc'] = 'នេះគឺជាអត្ថបទរបស់ខ្ញុំ';

// Process translation
$(function() {
  $('.translate').click(function() {
    var lang = $(this).attr('id');

    $('.lang').each(function(index, item) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });
  });
});
