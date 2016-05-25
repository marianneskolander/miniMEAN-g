// grab the mongoose module
var mongoose = require('mongoose');

// definerer mini model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Mini', {
	name : {type : String, default: ''}
});
