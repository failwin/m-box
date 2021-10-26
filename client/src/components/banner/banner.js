import './banner.scss';

export default function Banner({src}) {
    return (
        <div className='banner'>
            <img src={src} alt='Banner'/>
        </div>
    );
}