$(document).ready(function () {
  $(".page__content").tooltip({
    items: 'sup[role]',
    classes: {
      "ui-tooltip-content": "footnotes p"
    },
    hide: {
      delay: 750
    },
    content: function () {
      var linkedTooltipHref = $(this).find(".footnote").first().attr('href');
      var linkedTooltipId = linkedTooltipHref.replace('#', '');
      return document.getElementById(linkedTooltipId).innerHTML;
    }
  });
});
