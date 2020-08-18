const bookShelf=[];

const goldStar=`../images/goldStar.png`;
const greyStar=`../images/emptyStar.png`;

let myShelf=[];


//Rating are assumed to be out of 5
let bookReviews=[

{title:`Begin Again: James Baldwin's America and Its Urgent Lessons for Our Own`,
 author:`Eddie S. Glaude Jr.`,
 cover:`https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1565180308l/45754985.jpg`,
 review:`Eddie Glaude, Jr. has come into his own. Thoughts to come soon. And soon has arrived 7.7.2020 ✍🏿 In my preview to this book, I said Eddie Glaude has come into his own and has impressively stepped out of the shadow of Cornel West. I think this text solidifies Mr. Glaude as an independent thinker and certified wordsmith. The writing here is often brilliant and approachable. In Begin Again, Eddie Glaude offers us an unflinching look at Baldwin's own brilliance through prose and his critical analysis of a very turbulent America in the sixties. We also get a look at Baldwin, the man, and how the turbulence affected him. Baldwin counted Medgar Evers, Martin Luther King Jr., and Malcolm X as friends in some capacity, so to live through the loss of these imposing men had a profound impact on Baldwin the writer, and Baldwin the man. This book doesn't say what Baldwin would say in these times, but looks at what Baldwin said during his time of turbulence. And boldly asks is any of that critique relevant to our present day. The introduction is titled “Thinking With Jimmy” and that is a very apt description as that is really the basis of the entire text. In Mr. Glaude's estimation, America has to let go of the lie if she ever wants to heal.

“The people who settled the country had a fatal flaw. They could recognize a man when they saw one. They knew he wasn’t… anything else but a man; but since they were Christian, and since they had already decided that they came here to establish a free country, the only way to justify the role this chattel was playing in one’s life was to say that he was not a man. For if he wasn’t, then no crime had been committed. That lie is the basis of our present trouble.”

Baldwin was often a critic of white, so-called liberals who persisted in the lie's maintenance. This fits in nicely with Glaude's idea of the value gap, which he introduced in his previous work. There must come a day of reckoning where one decides what kind of country they want to live In and actively work to make that country possible. The brilliant way Mr. Glaude pulls together Baldwin’s prose and sprinkles biographical elements is exciting and makes this a must read.

“Baldwin offered these words for those who desperately sought to imagine a way forward: ‘Not everything is lost. I cannot lose responsibility, it can only be abdicated. If one refuses abdication, one begins again.’ So, is it hopeful or hopeless, I would say the text is definitely helpful, in gaining a deeper understanding of Baldwin and his wondrous pen. “Liberation from the languages and categories that box us in requires that we tap the source of it all, free ourselves of the lie, and start this whole damn thing over.’” With that being said it is highly important that one reflect on and gain a deep respect and understanding of language. This book goes a long way in that education. Thanks to Netgalley for the DRC and book is out now and has garnered best seller status.`,
 rating:4,
 blurb:`In Begin Again, Eddie Glaude offers us an unflinching look at Baldwin's own brilliance through prose and his...`
},

{title:`Stamped from the Beginning: The Definitive History of Racist Ideas in America`,
 author:`Ibram X. Kendi`,
 cover:`https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1440457523l/25898216.jpg`,
 review:`The author posits that there are really 3 sides to the debate of racial disparities existing and persisting. The three sides are segregationists, assimilationists and antiracists. His definition of racism,i.e., the adoption of racist ideas is a simple one, and as such you will see some famous people that will surprise you to be labeled as racist at points in their career. W.E.B. DuBois is certainly a name most readers would never associate with being a "racist" during his long illustrious career.

One thing that is most important in these kinds of arguments, is for everyone to be operating from the same definition. So to the author's credit he states his explanation of racist ideas early. Keep in mind, we are not talking about racism, but racist ideas and how these ideas have affected and infected not only Americans but world citizens. "My definition of a racist idea is a simple one: it is any concept that regards one racial group as inferior or superior to another racial group in any way. I define anti-Black racist ideas—the subject of this book—as any idea suggesting that Black people, or any group of Black people, are inferior in any way to another racial group."

With that in mind,author Ibram Kendi compiles a comprehensive history of racist ideas, using historical "tour guides " to traffic readers through a landscape beginning in mid 1600 to present day. Kendi here makes a powerful statement with this book about how these racist ideas have led to continuing racist discrimination.

"I held racist notions of Black inferiority before researching and writing this book. Racist ideas are ideas. Anyone can produce them or consume them, as Stamped from the Beginning’s interracial cast of producers and consumers show...Fooled by racist ideas, I did not fully realize that the only thing wrong with Black people is that we think something is wrong with Black people.I did not fully realize that the only thing extraordinary about White people is that they think something is extraordinary about White people."

That's a potent admission for someone writing the "definitive" history of racist ideas. But I think it is important to this wonderful work by Kendi. As he goes about exposing these ideas, readers may be surprised to find themselves subscribing to ideas that, by Kendi's definition are clearly racist. As we move through the five eras, with our guides, you will be fascinated as these ideas and the consequences of them are brought to light. Thoughts that you have given little attention to, and have become part of your consciousness will hopefully be liberated.

Something that black people generally do when they hear some terrible news item, one of the initial thoughts is hoping the perpetrators are not Black. Does that hope spring from our buying into the racist idea that Black people are pathological? And we will be judged by the actions of the perpetrators and therefore be seen as defective? Is this a racist idea?

"Already, the American mind was accomplishing that indispensable intellectual activity of someone consumed with racist ideas: individualizing White negativity and generalizing Black negativity. Negative behavior by any Black person became proof of what was wrong with Black people, while negative behavior by any White person only proved what was wrong with that person."

All the ways that racist ideas have worked hand in hand with discrimination are unearthed here. And it may come as a surprise to some that prominent Black leaders of their day held tightly to racist ideas, like uplift suasion. The concept that "was based on the idea that White people could be persuaded away from their racist ideas if they saw Black people improving their behavior, uplifting themselves from their low station in American society. The burden of race relations was placed squarely on the shoulders of Black Americans. Positive Black behavior, abolitionist strategists held, undermined racist ideas, and negative Black behavior confirmed them."

Sounds a lot like today's concept of respectability politics, if we would just pull our pants up, stop listening to that damn music, not be so loud, etc. etc. If we would just present ourselves in a more respectable manner, we could then usher in that post-racial epoch that some say is already here.

The journey through the racist idea history has to include the players and events of the time periods covered and Kendi does a good job of incorporating that history and integrating the ideas that girded those times. The book clocks in at 500 pages, but it is well worth your time and investment.`,
 rating:4,
 blurb:`The author posits that there are really 3 sides to the debate of racial disparities existing and persisting...`
},


];


let librarian={
  buildShelf:()=>{
    bookReviews.forEach((review)=>{
      bookShelf.push(new BookReview(review));
    });
  },
  shelveBook:(myBook)=>{
    event.stopPropagation();




    if (myShelf.includes(myBook)){
      myShelf=myShelf.filter((x)=>{x!=myBook});
      ci.fyiUser(`${bookShelf[myBook].title} removed from your shelf!`);
    }else{
      ci.addUnique(myShelf, myBook);
      ci.fyiUser(`${bookShelf[myBook].title} added to your shelf!`);
    }
      localStorage.setItem('myShelf', JSON.stringify(myShelf));
      $(`#buttonRow${myBook}`).html(librarian.getButtonRow(myBook));


  },
  discardBook:(filterID, reviewID)=>{
    event.stopPropagation();
    myShelf=myShelf.filter((x)=>{x!=filterID});
    localStorage.setItem('myShelf', JSON.stringify(myShelf));
    $(`#shelf${reviewID}`).remove();

  },

  reviewBook:(index)=>{
    let book=bookShelf[index];
    let display='';
    let ratingHeader='';
    let rating=``;
    let review='';
    for (let i=0; i<5; i++){

      rating+=`<div
        class="ratingStar"
        style="background-image: url('${book.rating>i? goldStar:greyStar}')">
      </div>`;
    }
    ratingHeader=`
    <hr>
    <div class="permaShadow">
      <div class="bookmarkReview">
        <div class="ratingBox">${rating}</div>
        <div class="bookCover" style="background-image: url('${book.cover}')"></div>
        <div class="infoSegment">
          <div class="textRow">
            <p><i>${book.title}</i>,
                <br> &emsp;  by <b>${book.author}</b>
                <hr></p>
              <p>${book.blurb}</p>
          </div>
          <div class="buttonRow">
            <button class="shelveButton" onclick='librarian.shelveBook(${index})'>Add to MyShelf</button>
          </div>
        </div>
      </div>
    </div>
    `;

    review=`<div id="activeReview">
      ${book.review}
    </div>`;

    display=`${ratingHeader}
    <hr>
    ${review}
    `;
    $("#reportArea").html(display);

  },
  displayShelf:()=>{
    let display=``;

    bookShelf.forEach((book, index)=>{
      let rating=``;
      for (let i=0; i<5; i++){

        rating+=`<div
          class="ratingStar"
          style="background-image: url('${book.rating>i? goldStar:greyStar}')">
        </div>`;
      }
      display+=`
      <hr>
      <div class="bookmarkShadow">
        <div class="bookmarkReview" onclick="librarian.reviewBook(${index})">
          <div class="ratingBox">${rating}</div>
          <div class="bookCover" style="background-image: url('${book.cover}')"></div>
          <div class="infoSegment">
            <div class="textRow">
              <p><i>${book.title}</i>,
                  <br> &emsp;  by <b>${book.author}</b>
                  <hr></p>
                <p>${book.blurb}</p>
            </div>
            <div id="buttonRow${index}" class="buttonRow">
              ${librarian.getButtonRow(index)}
            </div>
          </div>

        </div>
      </div>

      `;
    });

    $("#reportArea").html(display);
  },
  getButtonRow:(index)=>{
    let button=`<button class ="shelveButton" onclick='librarian.shelveBook(${index})'>${myShelf.includes(index)? 'Remove from MyShelf':'Add to MyShelf'} <div class="buttonIcon ${myShelf.includes(index)? 'shelvedIcon':'unshelvedIcon'}"></div> </button>`;

    return button;
  },

  displayMyShelf:()=>{
    let display=``;

    myShelf.forEach((book, index)=>{
      let rating=``;
      let bookID=book;
      book=bookShelf[book];
      for (let i=0; i<5; i++){

        rating+=`<div
          class="ratingStar"
          style="background-image: url('${book.rating>i? goldStar:greyStar}')">
        </div>`;
      }
      display+=`
      <hr>
      <div class="bookmarkShadow">
        <div class="bookmarkReview" onclick="librarian.reviewBook(${bookID})" id="shelf${index}">

          <div class="ratingBox">${rating}</div>
          <div class="bookCover" style="background-image: url('${book.cover}')"></div>
          <div class="infoSegment">
            <div class="textRow">
              <p><i>${book.title}</i>,
                  <br> &emsp;  by <b>${book.author}</b>
                  <hr></p>
                <p>${book.blurb}</p>
            </div>
            <div class="buttonRow">
              <button class ="unshelveButton" onclick='librarian.discardBook(${bookID}, ${index})'>Remove from MyShelf</button>
            </div>
          </div>

        </div>
      </div>

      `;
    });

    $("#reportArea").html(display);
  }
}

let ci={
  jumpTo:function(anchor){
    console.log(anchor);
    window.location.href = "#"+anchor;
  },

  addUnique:function(array, addition){
    if (!array.includes(addition)){
      array.push(addition);
    }
  },
  checkCommonGround:function(array1, array2){
    //tests if array1 and 2 have ANY elements in common
    let commonGround=false;
    if (array1.length<array2.length){
      for (let i=0, len=array1.length; i<len; i++){
        if (array2.includes(array1[i])){commonGround=true; break;}
      }
    }else{
      for (let i=0, len=array2.length; i<len; i++){
        if (array1.includes(array2[i])){commonGround=true; break;}
      }
    }

    return commonGround;
  },
  copyToClipboard:(copyText)=>{
    /* Get the text field */


   /* Select the text field */

   let range = document.createRange();
   let selection=window.getSelection();
   range.selectNode(copyText);
   selection.removeAllRanges();
   selection.addRange(range);
   document.execCommand("copy");



   /* Alert the copied text */
   ci.fyiUser("Magic Word copied to clipboard");
 },
 fyiUser:(text)=>{
   $("#alertBanner").removeClass("activeAlert");
   $("#alertBanner").html(text);
   $("#alertBanner").addClass("activeAlert");
   setTimeout(removeBanner, 5000)

   function removeBanner(){
     $("#alertBanner").removeClass("activeAlert");
   }
 },




}

 if (localStorage.getItem("myShelf") === null) {
  localStorage.setItem('myShelf', JSON.stringify(myShelf));
}else{
  myShelf=JSON.parse(localStorage.getItem("myShelf"));
}



function BookReview(info){
  this.title=info.title;
  this.author=info.author;
  this.cover=info.cover;
  this.review=info.review;
  this.rating=info.rating;
  this.blurb=info.blurb;

}
