
    let dataset = [];

    for (let i = 1; i <= 85; i++) {
      let inviteid = {
        value: i < 10 ? '0' + i : '' + i
      };
      dataset.push(inviteid);
    }

    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 20,
    });

    scanner.render(success, error);

    function success(result) {
      let foundObject = dataset.find(obj => obj.value === result);
      if (foundObject) {
        document.getElementById('result').innerHTML = `<h2>TICKET VALID!</h2>
        <i class="fa-solid fa-check fa-2xl" style="color: #17e82f;"></i>`;
        let foundIndex = dataset.findIndex(obj => obj.value === result);
        dataset.splice(foundIndex, 1);
      }
      else {
        document.getElementById('result').innerHTML = `<h2>TICKET INVALID!</h2>
        <i class="fa-solid fa-xmark fa-2xl" style="color: #e7390d;"></i>`;
      }
      scanner.clear();
      document.getElementById('reader').remove();
    }

    function error(err) {
      console.error(err);
    }