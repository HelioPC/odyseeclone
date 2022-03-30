import MvRow from '../MvRow';
import './style.scss';

export default function Videos({ movieList }) {
    return (
        <div className='vd'>
            <section className='list'>
                {movieList.map((item, key) => (
                    <MvRow key={key} title={item.title} items={item.items} />
                ))}
            </section>
        </div>
    )
}
