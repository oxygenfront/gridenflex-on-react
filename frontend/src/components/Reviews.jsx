import ball from '../img/ball-review.png';

function Reviews({
  id,
  author,
  image_url,
  description,
  company,
  rating,
  date,
}) {
  return (
    <div className='eighth-section__slider-item'>
      <div className='eighth-section__slider-item_up-block'>
        <div className='eighth-section__slider-item_up-block-left'>
          <div className='eighth-section__slider-item_avatar'>
            <img src={image_url} alt='' />
          </div>
          <div className='eighth-section__slider-item_flexbox'>
            <div className='eighth-section__slider-item_name'>{author}</div>
            <div className='eighth-section__slider-item_company'>{company}</div>
          </div>
        </div>
        <div className='eighth-section__slider-item_stars'></div>
      </div>
      <div className='eighth-section__slider-item_description'>
        {description}
      </div>
      <div className='eighth-section__slider-item_decorations'>
        <div className='eighth-section__slider-item_decoration'>
          <img src={ball} alt='' />
        </div>
        <div className='eighth-section__slider-item_decoration'>
          <img src={ball} alt='' />
        </div>
        <div className='eighth-section__slider-item_decoration'>
          <img src={ball} alt='' />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
