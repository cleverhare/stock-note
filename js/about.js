var bioShowMore = document.getElementById('show-more-icon');
var bioMoreWrap = document.getElementById('profile-bio-wrapper');

if (typeof(bioShowMore) != 'undefined' && bioShowMore != null){
	bioShowMore.addEventListener('click', function(){
		bioMoreWrap.classList.toggle('show-more-info');
	});
}
