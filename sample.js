// Please walk us through what is happening
import getCookie from 'getCookie';

function startCore(object, callback) {
  console.log(object);
  callback();
}

function fbIntercept() {
    const OriginalImage = Image;
    Image = function () {
        const oi = new OriginalImage();
        oi.onload = function () {
            if (this.src.match('.*id=123456789&ev=StartTrial.*')) {
                document.cookie = "_bc_name=John Doe; expires=Thu, 18 Dec 2021 12:00:00 UTC; path=/";
            } else if (this.src.indexOf('facebook.com/tr/?id=123456789&ev=CompleteRegistration') !== -1) {
                blackcrow.push({ trigger: 'set', data: { page_id: 'complete.registration' } });
            } 
        };
        return oi;
    };
}

if (!getCookie('_bc_name')) {
    startCore({site: "test"}, fbIntercept);
}
