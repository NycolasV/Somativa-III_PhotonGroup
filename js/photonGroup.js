window.addEventListener('load', () => {
    
  var sections = document.querySelectorAll("section");
  var links = document.querySelectorAll("#navIndex a");

  var assocs = [];


  links.forEach((link, i) => {
    let assoc = {
        "section" : sections[i],
        "link" : links[i],
    };

    assocs.push(assoc);

  });

  window.onscroll = function(e){
      let py = window.scrollY;

      assocs.forEach((assoc) => {
        assoc.link.classList.remove('active');

        if(py >= assoc.section.offsetTop && py <= assoc.section.offsetTop + assoc.section.clientHeight){
            assoc.link.classList.add('active');
        }
      });   
  };
})