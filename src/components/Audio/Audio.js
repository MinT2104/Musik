import { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import songs from '../../Context';


const Audio = () => {
    const Play = useContext(songs)
    console.log(Play.Play)
    return ( 
        <AudioPlayer
            className='absolute bottom-0 bg1 z-20 border-t-[1px] border-gray-500'
            autoPlay
            src={Play.Play.url}
            onPlay={e => console.log("onPlay")}
            layout="stacked-reverse"
            // other props here
            showJumpControls={true}
            showSkipControls={true}
            autoPlayAfterSrcChange={true}
        />
     );
}
 
export default Audio;