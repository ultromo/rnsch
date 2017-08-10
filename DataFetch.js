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
		    "Autism": {
		      "Lol": {
		        "Commendations": 0,
		        "_MiscProfileData": [
		          "Suffers from autism"
		        ],
		        "_GoodBehaviours": [{"IssuingTeacher":"Mr Pyukumuku", "UnixTime": 69, "FriendlyTime": "31/12/2016", "BodyText":"TAPU KOKOKO!!!", "Image":"http://cdn.history.com/sites/2/2015/02/golden-gate-bridge-iStock_000019197672Large-H.jpeg"}, {"IssuingTeacher":"Mrs Cancer McCancerFace", "UnixTime": 79, "FriendlyTime": "1/1/2017", "BodyText":"TAPU LELELE!!!", "Image":"https://timedotcom.files.wordpress.com/2017/01/170110_putinglasses.jpg?w=560"}],
		        "_MiscNumericalProfileData": {
		          "Warning slips": 9001
		        }
		      },
		      "Hei": {
		        "Commendations": 37,
		        "_MiscProfileData": [
		          "Suffers from down syndrome"
		        ],
		        "_GoodBehaviours": [{"IssuingTeacher":"Mr Pyukumuku", "UnixTime": 69, "FriendlyTime": "31/12/2016", "BodyText":"TAPU KOKOKO!!!", "Image":"http://cdn.history.com/sites/2/2015/02/golden-gate-bridge-iStock_000019197672Large-H.jpeg"}, {"IssuingTeacher":"Mrs Cancer McCancerFace", "UnixTime": 79, "FriendlyTime": "1/1/2017", "BodyText":"TAPU LELELE!!!", "Image":"https://timedotcom.files.wordpress.com/2017/01/170110_putinglasses.jpg?w=560"}],
		        "_MiscNumericalProfileData": {
		          "Warning slips": 9001
		        }
		      }
		    },
		    "Down": {
		      "Pop": {
		        "Commendations": 0,
		        "_MiscProfileData": [
		          "Goes the weasel"
		        ],
		        "_GoodBehaviours": [{"IssuingTeacher":"Mr Pyukumuku", "UnixTime": 69, "FriendlyTime": "31/12/2016", "BodyText":"TAPU KOKOKO!!!", "Image":"http://cdn.history.com/sites/2/2015/02/golden-gate-bridge-iStock_000019197672Large-H.jpeg"}, {"IssuingTeacher":"Mrs Cancer McCancerFace", "UnixTime": 79, "FriendlyTime": "1/1/2017", "BodyText":"TAPU LELELE!!!", "Image":"https://timedotcom.files.wordpress.com/2017/01/170110_putinglasses.jpg?w=560"}],
		        "_MiscNumericalProfileData": {
		          "Warning slips": 9001
		        }
		      },
		      "Hei": {
		        "Commendations": 37,
		        "_MiscProfileData": [
		          "Suffers from down syndrome"
		        ],
		        "_GoodBehaviours": [{"IssuingTeacher":"Mr Pyukumuku", "UnixTime": 69, "FriendlyTime": "31/12/2016", "BodyText":"TAPU KOKOKO!!!", "Image":"http://cdn.history.com/sites/2/2015/02/golden-gate-bridge-iStock_000019197672Large-H.jpeg"}, {"IssuingTeacher":"Mrs Cancer McCancerFace", "UnixTime": 79, "FriendlyTime": "1/1/2017", "BodyText":"TAPU LELELE!!!", "Image":"https://timedotcom.files.wordpress.com/2017/01/170110_putinglasses.jpg?w=560"}],
		        "_MiscNumericalProfileData": {
		          "Warning slips": 9001
		        }
		      }
		    }
		  },
		  "TeacherName": "Autism Spectrum Disorder"
		}
    this.dataInvalidated = false
  }
}

var loadFeed = function(){
	if (feedInvalidated == true){
		busywait(500);
		Feed = [["Master Jhew Hay Cong, 4D", "by Mr Cancerous McCancerFace", "Commendable behaviour! Autism observed.", "1 JANUARY 2017", 69, "http://cdn.history.com/sites/2/2015/02/golden-gate-bridge-iStock_000019197672Large-H.jpeg"], ["Jaster Hew Cay Mong, 3D", "by Mr Mhang Zheisuo", "Commendable behaviour! Autism observed. Long good behaviour strings are truncated. Tap to view full string. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "31 DECEMBER 2016", 29, "https://timedotcom.files.wordpress.com/2017/01/170110_putinglasses.jpg?w=560"]]
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
