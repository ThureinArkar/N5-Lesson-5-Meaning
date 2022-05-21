const display=document.querySelector("p"),
display1 = document.getElementById("text1"),
display2 = document.getElementById("text2"),
display3 = document.getElementById("text3"),
display4 = document.getElementById("text4"),
 button=document.querySelector("button"),
 copyBtn=document.querySelector("span.far"),
 copyActive=document.querySelector("span.fas");
//let chars ='あいうえお';
let chars = [
  
  {
    text1:`သွားသည်`,
  },
  {
    text1:`လာသည်`,
  },
  {
    text1:`ပြန်သည်`,
  },
  {
    text1:`ကျောင်း`,
  },
  {
    text1:`စူပါမားကက်`,
  },
  {
    text1:`ဘူတာ`,
  },
  {
    text1:`လေယာဉ်ပျံ`,
  },
  {
    text1:`သင်္ဘော`,
  },
  {
    text1:`ရထား`,
  },
  {
    text1:`မြေအောက်ရထား`,
  },
  {
    text1:`ကျည်ဆန်ရထား`,
  },
  {
    text1:`ဘတ်စကား`,
  },
  {
    text1:`တက္ကစီ`,
  },
  {
    text1:`စက်ဘီး`,
  },
  {
    text1:`လမ်းလျှောက်ပြီး`,
  },
  {
    text1:`လူ`,
  },
  {
    text1:`သူငယ်ချင်း`,
  },
  {
    text1:`သူ၊ယောက်ျားလေးသူငယ်ချင်း (ရည်းစား)`,
  },
  {
    text1:`သူမ၊မိန်းကလေးသူငယ်ချင်း (ရည်းစား)`,
  },
  {
    text1:`မိသားစု`,
  },
  {
    text1:`တစ်ယောက်တည်း`,
  },
  {
    text1:`ပြီးခဲ့တဲ့အပတ်`,
  },
  {
    text1:`ဒီအပတ်`,
  },
  {
    text1:`လာမည့်အပတ်/ နောက်အပတ်`,
  },
  {
    text1:`ပြီးခဲ့တဲ့လ`,
  },
  {
    text1:`ဒီလ`,
  },
  {
    text1:`လာမည့်လ/ နောက်လ`,
  },
  {
    text1:`ပြီးခဲ့တဲ့နှစ်/ မနှစ်က`,
  },
  {
    text1:`ဒီနှစ်`,
  },
  {
    text1:`လာမည့်နှစ်/ နောက်နှစ်`,
  },
  {
    text1:`-နှစ် (ခုနှစ်သက္ကရာဇ်ကိုဆိုလိုသည်။)`,
  },
  {
    text1:`ဘယ်နှစ်`,
  },
  {
    text1:`-လ`,
  },
  {
    text1:`ဘယ်လ`,
  },
  {
    text1:`၁ရက်နေ့၊၁ရက်`,
  },
  {
    text1:`၂ရက်နေ့၊၂ရက်`,
  },
  {
    text1:`၃ရက်နေ့၊၃ရက်`,
  },
  {
    text1:`၄ရက်နေ့၊၄ရက်`,
  },
  {
    text1:`၅ရက်နေ့၊၅ရက်`,
  },
  {
    text1:`၆ရက်နေ့၊၆ရက်`,
  },
  {
    text1:`၇ရက်နေ့၊၇ရက်`,
  },
  {
    text1:`၈ရက်နေ့၊၈ရက်`,
  },
  {
    text1:`၉ရက်နေ့၊၉ရက်`,
  },
  {
    text1:`၁ဝရက်နေ့၊၁ဝရက်`,
  },
  {
    text1:`၁၄ရက်နေ့၊၁၄ရက်`,
  },
  {
    text1:`၂ဝရက်နေ့၊၂ဝရက်`,
  },
  {
    text1:`၂၄ရက်နေ့၊၂၄ရက်`,
  },
  {
    text1:`-ရက်နေ့၊-ရက်`,
  },
  {
    text1:`ဘယ်ရက်နေ့၊ဘယ်ရက်`,
  },
  {
    text1:`ဘယ်အချိန်၊ဘယ်တော့`,
  },
  {
    text1:`မွေးနေ့`,
  },
  {
    text1:`ဟုတ်တယ်နော်။`,
  },
  {
    text1:`ကျေးဇူးတင်ပါတယ်။`,
  },
  {
    text1:`မဟုတ်တာ၊ရပါတယ်။`,
  },
  {
    text1:`-စင်္ကြန် (ဘူတာမှစင်္ကြန်နံပါတ်)`,
  },
  {
    text1:`နောက်လာမည့်`,
  },
  {
    text1:`ရိုးရိုး (ရထားအမျိုးအစား)`,
  },
  {
    text1:`အမြန် (ရထားအမျိုးအစား)`,
  },
  {
    text1:`အထူးအမြန် (ရထားအမျိုးအစား)`,
  },
  {
    text1:`ခိုးရိုအမ်း(အိုဆာကာအနီးရှိမြိုအမည်)`,
  },
  {
    text1:`အိုဆာကာရဲတိုက် (အိုဆာကာရှိထင်ရှားသော
      ရဲတိုက်)`,
  },
];



















button.addEventListener('click', () => {
let randomPhrase=Math.floor(Math.random() * chars.length);
display.innerHTML = chars[randomPhrase].text1;
});

snowFall.snow(document.querySelector('.snow'), {
	minSize: 6,
	maxSize: 10,
	round: true,
	flakeCount: 30,
	flakeColor: 'white'
});





//  button.onclick=()=>{

// let randomPhrase=Math.floor(Math.random() * chars.length);
// display.value = chars[randomPhrase].text;
// display1.value = chars[randomPhrase].author;
// display2.value = chars[randomPhrase].text1;
// display3.value = chars[randomPhrase].text2;
// let randomPhrase1 =Math.floor(Math.random() * chars1.length);
// display1.value = chars1[randomPhrase].author;
   //
   // let i,
   // randomPassword="";
   // copyBtn.style.display = "block";
   // copyActive.style.display = "none";
   // for ( i = 0; i < 1; i++) {
   //   randomPassword = randomPassword + chars.charAt(
   //     Math.floor(Math.random() * chars.length)
   //   );
   // }

//  }
