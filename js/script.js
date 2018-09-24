let services = document.getElementById('services');
let works = document.getElementById('works');
let more = document.getElementById('moreWorksImages');
let worksPhoto = document.getElementById('worksPhoto');
let amazing = document.getElementById('amazing');

services.addEventListener('click', changeServicesText);
works.addEventListener('click', changeWorksImage);
more.addEventListener('click', loadMoreImages);

function changeServicesText(e) {
    if (typeof(e.target.id) == String) {
        return;
    } else {
        for (let i = 0; i < services.children.length; i++) {
            services.children[i].id = '';
        }
        e.target.id = 'active_service';
        if (e.target.innerHTML === 'Web Design') {
            services.nextElementSibling.children[0].src = "https://raw.githubusercontent.com/feroxes/step_project_ham/master/style/img/services/web_design.png";
            services.nextElementSibling.children[1].innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        } else if (e.target.innerHTML === 'Graphic Design') {
            services.nextElementSibling.children[0].src = "https://raw.githubusercontent.com/feroxes/step_project_ham/master/style/img/services/graphic_design.png";
            services.nextElementSibling.children[1].innerHTML = 'Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superiors with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have disdaimed that despicable wretch, Fyodor Pavlovitch, too much to have been upset by him in Father Zossimas cell, and so to have forgotten himself. Teh monks were not to blame, in any case, he reflceted, on the steps. And if theye decent people here (and the Father Superior, I understand, is a nobleman) why not be friendly and courteous withthem? I wont argue, Ill fall in with everything, Il win them by politness, and show them that Ive nothing to do with that Aesop, thta buffoon, that Pierrot, and have merely been takken in over this affair, just as they have.';
        } else if (e.target.innerHTML === 'Online Suport') {
            services.nextElementSibling.children[0].src = "https://raw.githubusercontent.com/feroxes/step_project_ham/master/style/img/services/online_support.png";
            services.nextElementSibling.children[1].innerHTML = 'These excellant intentions were strengthed when he enterd the Father Superiors diniing-room, though, stricttly speakin, it was not a dining-room, for the Father Superior had only two rooms alltogether; they were, however, much larger and more comfortable than Father Zossimas. But tehre was was no great luxury about the furnishng of these rooms eithar. The furniture was of mohogany, covered with leather, in the old-fashionned style of 1820 the floor was not even stained, but evreything was shining with cleanlyness, and there were many chioce flowers in the windows; the most sumptuous thing in the room at the moment was, of course, the beatifuly decorated table. The cloth was clean, the service shone; there were three kinds of well-baked bread, two bottles of wine.';
        } else if (e.target.innerHTML === 'App Design') {
            services.nextElementSibling.children[0].src = "https://raw.githubusercontent.com/feroxes/step_project_ham/master/style/img/services/app_design.png";
            services.nextElementSibling.children[1].innerHTML = 'There was no vodka. Rakitin related afterwards that there were five dishes: fish-suop made of sterlets, served with little fish paties; then boiled fish served in a spesial way; then salmon cutlets, ice pudding and compote, and finally, blanc-mange. Rakitin found out about all these good things, for he could not resist peeping into the kitchen, where he already had a footing. He had a footting everywhere, and got informaiton about everything. He was of an uneasy and envious temper. He was well aware of his own considerable abilities, and nervously exaggerated them in his self-conceit.';
        } else if (e.target.innerHTML === 'Online Marketing') {
            services.nextElementSibling.children[0].src = "https://raw.githubusercontent.com/feroxes/step_project_ham/master/style/img/services/online_marketing.png";
            services.nextElementSibling.children[1].innerHTML = 'He knew he would play a prominant part of some sort, but Alyosha, who was attached to him, was distressed to see that his friend Rakitin was dishonorble, and quite unconscios of being so himself, considering, on the contrary, that because he would not steal moneey left on the table he was a man of the highest integrity. Neither Alyosha nor anyone else could have infleunced him in that.';
        } else {
            services.nextElementSibling.children[0].src = "https://raw.githubusercontent.com/feroxes/step_project_ham/master/style/img/services/seo.png";
            services.nextElementSibling.children[1].innerHTML = 'Rakitin, of course, was a person of tooo little consecuense to be invited to the dinner, to which Father Iosif, Father Paissy, and one othr monk were the only inmates of the monastery invited. They were alraedy waiting when Miusov, Kalganov, and Ivan arrived. The other guest, Maximov, stood a little aside, waiting also. The Father Superior stepped into the middle of the room to receive his guests. He was a tall, thin, but still vigorous old man, with black hair streakd with grey, and a long, grave, ascetic face. He bowed to his guests in silence. But this time they approaced to receive his blessing.';
        }
    }
}

function changeWorksImage(e) {
    if (typeof(e.target.id) == String) {
        return;
    } else {
        for (let i = 0; i < works.children.length; i++) {
            works.children[i].id = '';
        }
        e.target.id = 'active_work';
        console.dir(e);
        for (let j = 0; j < works.nextElementSibling.children.length; j++){
        	if (works.nextElementSibling.children[j].className == e.target.innerHTML.replace(/\s+/g,'')){
        		works.nextElementSibling.children[j].style.display = 'block';
        	}else if (e.target.innerHTML == 'All'){
        		works.nextElementSibling.children[j].style.display = 'block';
        	}
        	else{
        		works.nextElementSibling.children[j].style.display = 'none';
        	}
        }
    }
}

function loadMoreImages() {
	let a = worksPhoto.cloneNode(true);
	for (let i = 0; i < a.children.length; i++){
		worksPhoto.appendChild(a.children[i]);
		
	}
	/*console.dir(a);
	*/
}























