$(document).ready(function(){
  var quoteSource=[
  {
      quote: "Kim was my go-to gal on staff. I could drive by her desk, spew some loosely formed notions of all the things I wanted a single 6-word headline to do and she would effortlessly reply with a clever, quick-witted zinger that would have me pulling my finger guns out of the holster before I even had the chance to sit down. She is thoughtful in her approach, spunky in her style and a continuous student of her craft. Kim is tremendously talented. Period. P.S. Copywriters love punctuation jokes.",
      name:"Jess Dodson, graphic design guru & UX maven"
    },
    {
      quote:"Kim Huston has been the best work-proximity-associate that I've ever had the pleasure of working with creatively. With a laugh heard 'round the world (like literally, she is l-o-u-d), you can at least know where she is if you want to avoid her. And if you don't hear her, you know she's getting shit done and you best not disturb her or she'll come at you like a wolverine. But like, she's still cute even with her teeth bared... awwwww! Even though we've both moved on to legitimately greener pastures, I still hit her up whenever I need a copy partner because she is a copy pro and is a great collaborator. Hopfully she proofed this because I told her to.",
      name:"Cara Smith Bezuska, graphic designer, video game designer"
    },
    {
      quote:"Five stars. Would hire.",
      name:"Jaime Endick, content & social media strategist, brevity believer"
    },
    {
      quote:"Kim’s social media outreach work generated so much traffic to my website about Shaq that it crashed. More than once. Influential in Canadian basketblogger circles.",
      name:"Dan Nixon, web developer & general cool dude"
    },
    {
      quote:"She suffers no fools, but I'll be damned if she doesn't make people cry laughing. Working with Kim isn't work because she's hilarious, has her heart in the right place, and is dedicated to what she does. Whatever that is. She's a writer, right?",
      name:"Erin Routson, creative director & fellow NBA podcaster"
    },
    {
      quote:"Kim can write about pizza and the heart disease you'll  get from eating too much of said pizza.",
      name:"Liz Vasquez, project manager & animal lover"
    },
];
  $('#quoteButton').click(function(evt){
    //Define targeted info containers
    var quote = $('#quoteContainer p').text();
    var quoteColleague = $('#quoteColleague').text();
    //Prevent browser default action
    evt.preventDefault();
    //getting a new random number to attach to a quote and set a limit
    var sourceLength = quoteSource.length;
    var randomNumber= Math.floor(Math.random()*sourceLength);
    //Set a new quote
    for(i=0;i<=sourceLength;i+=1){
    var newQuoteText = quoteSource[randomNumber].quote;
    var newQuoteColleague = quoteSource[randomNumber].name;
    //console.log(newQuoteText,newQuoteColleague);
    var timeAnimation = 500;
    var quoteContainer = $('#quoteContainer');
    //Fade out animation,callback
    quoteContainer.fadeOut(timeAnimation, function(){
      quoteContainer.html('');
    quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteColleague">'+'-'+newQuoteColleague+'</p>');

      //fFade-in animation.
      quoteContainer.fadeIn(timeAnimation);
    });

    break;
  };//End for loop

});//End quoteButton function


});//End document ready
