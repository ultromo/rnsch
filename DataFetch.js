var Data2;

var Feed;

var feedInvalidated = true;

var busywait = function(milliseconds) {
	var dt = new Date();
	while ((new Date()) - dt <= milliseconds) {
  }
}

var loadData = function(){
  if (this.dataInvalidated == true){
    //simulated load data, server stuff not implemented yet
    //ideally we should be able to replicate changes made on server side quickly
    busywait(500);
    this.Data2 = {
		  "Classes": {
		    "4Y": {
		      "Student A1": {
		        "Commendations": 2,
		        "_MiscProfileData": [
		          "Class Executive Committee Vice Chairman"
		        ],
		        "_GoodBehaviours": [{"IssuingTeacher":"Mr Teacher C", "UnixTime": 69, "FriendlyTime": "18 FEBRUARY 2017", "BodyText":"Good student! Very helpful.", "Image":"http://4.bp.blogspot.com/-Gg-J2s4LccY/UL9pRcg7bOI/AAAAAAAAAEo/QyEpHKTSMR8/s1600/Reuse-Reduce-Recycle.png"}, {"IssuingTeacher":"Mrs Teacher D", "UnixTime": 79, "FriendlyTime": "3 MAY 2016", "BodyText":"I am a nice teacher. I write nice comments.", "Image":"http://i.ndtvimg.com/i/2015-08/banana_625x350_61439959915.jpg"}],
		        "_MiscNumericalProfileData": {
		          "Warning slips": 0
		        }
		      },
		      "Student A2": {
		        "Commendations": 2,
		        "_MiscProfileData": [
		          "Head Prefect"
		        ],
		        "_GoodBehaviours": [{"IssuingTeacher":"Mr Teacher C", "UnixTime": 69, "FriendlyTime": "18 FEBRUARY 2017", "BodyText":"Good student! Very helpful.", "Image":"http://4.bp.blogspot.com/-Gg-J2s4LccY/UL9pRcg7bOI/AAAAAAAAAEo/QyEpHKTSMR8/s1600/Reuse-Reduce-Recycle.png"}, {"IssuingTeacher":"Mrs Teacher D", "UnixTime": 79, "FriendlyTime": "3 MAY 2016", "BodyText":"I am a nice teacher. I write nice comments.", "Image":"http://i.ndtvimg.com/i/2015-08/banana_625x350_61439959915.jpg"}],
		        "_MiscNumericalProfileData": {
		          "Warning slips": 1
		        }
		      }
		    },
		    "3X": {
		      "Student B1": {
		        "Commendations": 2,
		        "_MiscProfileData": [
		          "Top in Form"
		        ],
		        "_GoodBehaviours": [{"IssuingTeacher":"Mr Teacher C", "UnixTime": 69, "FriendlyTime": "18 FEBRUARY 2017", "BodyText":"Good student! Very helpful.", "Image":"http://4.bp.blogspot.com/-Gg-J2s4LccY/UL9pRcg7bOI/AAAAAAAAAEo/QyEpHKTSMR8/s1600/Reuse-Reduce-Recycle.png"}, {"IssuingTeacher":"Mrs Teacher D", "UnixTime": 79, "FriendlyTime": "3 MAY 2016", "BodyText":"I am a nice teacher. I write nice comments.", "Image":"http://i.ndtvimg.com/i/2015-08/banana_625x350_61439959915.jpg"}],
						"_MiscNumericalProfileData": {
		          "Warning slips": 0
		        }
		      },
		      "Student B2": {
		        "Commendations": 2,
		        "_MiscProfileData": [
		          "House Captain"
		        ],
						"_GoodBehaviours": [{"IssuingTeacher":"Mr Teacher C", "UnixTime": 69, "FriendlyTime": "18 FEBRUARY 2017", "BodyText":"Good student! Very helpful.", "Image":"http://4.bp.blogspot.com/-Gg-J2s4LccY/UL9pRcg7bOI/AAAAAAAAAEo/QyEpHKTSMR8/s1600/Reuse-Reduce-Recycle.png"}, {"IssuingTeacher":"Mrs Teacher D", "UnixTime": 79, "FriendlyTime": "3 MAY 2016", "BodyText":"I am a nice teacher. I write nice comments.", "Image":"http://i.ndtvimg.com/i/2015-08/banana_625x350_61439959915.jpg"}],
						"_MiscNumericalProfileData": {
		          "Warning slips": 1
		        }
		      }
		    }
		  },
		  "TeacherName": "Mr GoodAtMath (You)"
		}
    this.dataInvalidated = false
  }
}

var loadFeed = function(){
	if (feedInvalidated == true){
		busywait(500);
		Feed = [["Student A, 4N", "by Mr Teacher A", "Commendable behaviour! Student A helped to pick up litter along the classroom corridors.", "31 FEBRUARY 2017", 69, "http://4.bp.blogspot.com/-Gg-J2s4LccY/UL9pRcg7bOI/AAAAAAAAAEo/QyEpHKTSMR8/s1600/Reuse-Reduce-Recycle.png"], ["Student B, 3X", "by Mr Teacher B", "Commendable behaviour! Student B was observed asking the canteen vendors for more fruits. Long good behaviour strings are truncated. Tap to view full string. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "31 DECEMBER 2016", 29, "http://i.ndtvimg.com/i/2015-08/banana_625x350_61439959915.jpg"]]
		//data format: [[Student, Teacher, Commendation, Time, UnixTime], ..]
		feedInvalidated = false
	}
}

var getFeed = function(){
	if (feedInvalidated == true){
		loadFeed()
	}
	return Feed
}

//conditions under which data is invalidated:
//1) if we haven't implemented in-place data modification ie we modify student profiles directly when teachers make changes on their devices
//2) how do we propagate changes in react again? my skill level too low

var exports = module.exports = {
	dataInvalidated: true,
	authenticationKey: "SMAULMAULTAUL"
}
exports.Data2 = Data2
exports.getFeed = getFeed
exports.loadData = loadData
exports.loadFeed = loadFeed
