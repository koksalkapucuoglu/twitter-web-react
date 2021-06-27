import Twit from '../../lib/twit';

export default function handler(req, res) {

    Twit.get('search/tweets', { from: "ReactExpo", count:20}, function(err, data, response){
        if(err)
        {
            return res.status(400).json(JSON.stringify({message: " Something happened!"}))

        }
        return res.status(200).json(JSON.stringify(data))
    })

}