{
	tests: [
		{
			title: "Request.JSONP",
			description: "Gets the current rating of an ipod from CNET using script injection",
			verify: "Did it alert the rating?",
			before: function(){
				new Request.JSONP({
				  url: 'http://api.cnet.com/restApi/v1.0/techProduct?productId=32069546&iod=none&viewType=json&partKey=19926949750937665684988687810562',
		      onComplete: function(data){
		        alert("The ipod gets an " + data.CNETResponse.TechProduct.EditorsRating.$);
		      }
				}).send(); //alerts 8.3 - the rating of the ipod
			}
		}
	]
}