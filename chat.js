document.addEventListener('DOMContentLoaded', function () {
  const chatButton = document.getElementById('zendeskButton');
  let isWidgetOpen = false;

  chatButton.addEventListener('click', function () {
    if (typeof zE !== 'undefined') {
      if (!isWidgetOpen) {
        zE('messenger', 'open');
      } else {
        zE('messenger', 'close');
      }
      isWidgetOpen = !isWidgetOpen;
    } else {
      console.error('Zendesk Widget is not loaded');
    }
  });

  // Optional: Listen to Zendesk events to update button state
  if (typeof zE !== 'undefined') {
    zE('messenger:on', 'open', function () {
      isWidgetOpen = true;
    });

    zE('messenger:on', 'close', function () {
      isWidgetOpen = false;
    });
  }
});
