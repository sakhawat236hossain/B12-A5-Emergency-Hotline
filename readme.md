
 # Question:-(1) What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

  # Answer = (1)

১. getElementById > এটি একটি উপাদান প্রদান করে। প্রতিটি নামের (ID) জন্য প্রতি পৃষ্ঠায় শুধুমাত্র একটি উপাদান থাকে।উদাহরণ =document.getElementById("title")
 ২. getElementsByClassName > এটি একসাথে একাধিক উপাদান প্রদান করে। উদাহরণ =document.getElementsByClassName("card") 
 ৩. querySelector > এটি (css) এর মতো কাজ করে । সবার প্রথমে যেটা পাবে ওটাই ফেরত দিবে। চাই সেটা (ID) হোক বা ক্লাস (class ) । তবে এটা বেবহার করার সময় যদি (ID) হয় তাহলে (#)দিয়ে বেবহার করতে হবে। আর যদি এটা (class ) হয় তাহলে শুরুতে (.) বেবহার করতে হবে । না হয় কাজ করবেন । উদাহরণ =document.querySelector(".card") document.querySelector("#title")
  ৪. querySelectorAll > একই নাম যত ক্লাস পাবে সব গুলোকেই ফেরত দিবে । এটা (ID) নিবেন শুধু ক্লাস। ক্লাস বেবহার সময় (.)এটা দিয়ে বেবহার করতে হবে । উদাহরণ = document.querySelectorAll(".card")


 # Question:-(2) How do you create and insert a new element into the DOM?


  # Answer = (2)

DOM-এ একটি নতুন উপাদান তৈরি এবং সন্নিবেশ করার জন্য ৩টি ধাপ রয়েছে।
1.document.createElement("div ") এখানে  যেটা বানাবে ঐটার ট্যাগ নাম দিতে হবে যেমন (div,li,h1)
২.ওই এলিমেন্ট এ চাইলে যেকোনো কিসু অ্যাড করা যায় যেমন  (text / class / id / style)  যেমন newDiv.innerText = "Hello!";
৩.অবশেষে এটা append() করতে হবে । যেখানে দেখতে চাই । তার পেরেন্ট কে ধরে নতুন যে এলিমেন্ট বানানো হইসে সেটাকে Add করে দিতে হবে । যেমন  document.body.appendChild(newDiv);
(এখানে নতুন একটা div বানানো হলো ওটাকে  body তে append করা হলো  )\



 # Question:-(3) What is Event Bubbling and how does it work?


  # Answer = (3)

 Event Bubbling মানে হলো একটা child element এ ইভেন্ট ঘটলে সেটা প্রথমে সেখানে কাজ করে, তারপর তার parent → তার parent  এভাবে যত ক্ষন শেষ হয়নি এভাবে উপরে উঠতে থাকবে সবশেষে document পর্যন্ত উপরে উঠতে থাকে। এর পরে বন্ধ হয়ে যাবে । 
 যদি button এ ক্লিক করা হয় :

১.আগে child button এর ইভেন্ট কাজ করবে

২.তারপর parent div এর ইভেন্ট

৩.তারপর body এর ইভেন্ট
এভাবেই ইভেন্ট bubble হয়ে উপরে যায়
 ইভেন্ট থামাতে চাইলে এটা বেবহার করতে হয় stopPropagation()



 # Question:-(4) What is Event Delegation in JavaScript? Why is it useful?



  # Answer = (4)

# Event Delegation কী?

Event Delegation হলো —
আমরা যখন অনেকগুলো ছোট ছোট এলিমেন্টে (child) ইভেন্ট বসাতে চাই, তখন প্রত্যেকটাতে আলাদা addEventListener() না বসিয়ে, তাদের parent element-এ একটি মাত্র ইভেন্ট লিসেনার বসাই।
তারপর ইভেন্ট বাবলিং ব্যবহার করে বোঝা যায় আসলে কোন child এ ক্লিক হয়েছে।

# কেন Event Delegation কার্যকর?

১.কম কোডে কাজ হয় – একবার parent এ বসালেই সব child কভার হয়।

২.পারফরম্যান্স ভালো – অনেকগুলো ইলিমেন্টে আলাদা আলাদা লিসেনার বসাতে হয় না।

৩.ডাইনামিক এলিমেন্টেও কাজ করে – পরে যদি নতুন li যোগ করা হয়, parent এর লিসেনার তখনো কাজ করবে।


 # Question:-(5) What is the difference between preventDefault() and stopPropagation() methods?


  # Answer = (5)

১.preventDefault()

কাজ: কোনো ইভেন্টের  (default behavior) বন্ধ করে।
যেমন:
একটি form সাবমিট করলে সাধারণত পেজ রিফ্রেশ হয় → preventDefault() দিলে সেটা হবে না।


২. stopPropagation()

কাজ: Event Bubbling  বা  ক্যাপচারিং বন্ধ করে।

অর্থাৎ ইভেন্ট আর উপরের parent element-এ যাবে না।