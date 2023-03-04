import axios from 'axios';
import { React, useEffect, useState } from 'react';
import {
  Accordeon,
  Button,
  Feedback,
  Header,
  ModalLanding,
  ModalCorp,
  ModalShop,
  ModalThree,
  Reviews,
  SliderServices,
  SliderTeam,
  BodyReview,
  ModalReview,
} from './components';
import ModalFeedback from './components/Modals/ModaFeedback';
import * as images from './img/images';

function App() {
  const [reviews, setReviews] = useState([]);
  const [isModalLanding, setIsModalLanding] = useState(false);
  const [isModalCorp, setIsModalCorp] = useState(false);
  const [isModalShop, setIsModalShop] = useState(false);
  const [isModalReview, setIsModalReview] = useState(false);
  const [isFeedback, setIsFeedback] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3001/api/getReviews').then(({ data }) => {
      setReviews(data);
    });
  }, []);
  const reviewsLen = reviews.length;
  return (
    <div className='App'>
      <div className='first-section'>
        <Header />

        <div className='first-section__wave-lines'>
          <img src={images.lines} alt='' />
        </div>
        <div className='first-section__container container'>
          <div className='first-section__left-block'>
            <div className='first-section__slogan'>
              Создаем сайты <br /> под ключ <br />
              <span className='keyword_fiol'>за 2 недели</span>
            </div>
            <a href='#feedback' className='button'>
              Написать нам
            </a>
          </div>
          <div className='first-section__right-block'>
            <img src={images.gif} alt='' />
          </div>
        </div>
      </div>
      <div className='second-section'>
        <Accordeon />
      </div>
      <div className='fourth-section' id='fourth-section'>
        <div className='fourth-section__grid'></div>
        <div className='fourth-section__grid'></div>
        <div className='fourth-section__grid'>
          <span>кейсы</span>
          <p>title проекта</p>
        </div>
        <div className='fourth-section__grid'></div>
        <div className='fourth-section__grid'>
          <img src={images.mogo} alt='' />
        </div>
        <div className='fourth-section__grid'></div>
        <div className='fourth-section__grid'></div>
        <div className='fourth-section__grid'></div>
        <div className='fourth-section__grid'></div>
        <div className='fourth-section__grid'></div>
        <div className='fourth-section__grid'></div>
        <div className='fourth-section__grid'></div>
        <div className='fourth-section__grid'></div>
        <div className='fourth-section__grid'></div>
        <div className='fourth-section__grid'></div>
        <div className='fourth-section__grid'></div>
        <div className='fourth-section__grid'></div>
        <div className='fourth-section__grid'></div>
        <div className='fourth-section__grid'>
          <img src={images.picture2} alt='' />
        </div>
        <div className='fourth-section__grid'></div>
        <div className='fourth-section__grid'>
          <img src={images.picture3} alt='' />
        </div>
        <div className='fourth-section__grid'></div>
        <div className='fourth-section__grid'>
          <img src={images.picture4} alt='' />
        </div>
        <div className='fourth-section__grid'></div>
        <div className='fourth-section__grid'></div>
        <div className='fourth-section__grid'></div>
        <div className='fourth-section__grid'>Title2</div>
        <div className='fourth-section__grid'></div>
        <div className='fourth-section__grid'>Title3</div>
        <div className='fourth-section__grid'></div>
        <div className='fourth-section__grid'>Title4</div>
        <div className='fourth-section__grid'></div>
        <div className='fourth-section__grid'></div>
        <div className='fourth-section__grid'></div>
        <div className='fourth-section__grid'>
          <img src={images.picture5} alt='' />
        </div>
        <div className='fourth-section__grid'></div>
        <div className='fourth-section__grid'></div>
        <div className='fourth-section__grid'></div>
        <div className='fourth-section__grid'>
          <img src={images.picture6} alt='' />
        </div>
        <div className='fourth-section__grid'></div>
        <div className='fourth-section__grid'></div>
        <div className='fourth-section__grid'></div>
        <div className='fourth-section__grid'>
          <p>Title5</p>
        </div>
        <div className='fourth-section__grid'></div>
        <div className='fourth-section__grid'>
          <a href='#!'>Смотреть еще</a>
        </div>
        <div className='fourth-section__grid'></div>
        <div className='fourth-section__grid'>
          <p>Title6</p>
        </div>
        <div className='fourth-section__grid'></div>
      </div>
      <div className='fifth-section'>
        <div className='fifth-section__grid'>
          <div className='fifth-section__grid-child'>
            <div className='fifth-section__grid-child-title'>
              Технологии и этапы разработки
            </div>
          </div>
        </div>
        <div className='fifth-section__grid'></div>
        <div className='fifth-section__grid'></div>
        <div className='fifth-section__grid'></div>
        <div className='fifth-section__grid'></div>
        <div className='fifth-section__grid'></div>
        <div className='fifth-section__grid'></div>
        <div className='fifth-section__grid'>1</div>
        <div className='fifth-section__grid'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A porro iure
          doloremque enim facilis ea.
        </div>
        <div className='fifth-section__grid'>2</div>
        <div className='fifth-section__grid'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          repellat vitae atque laboriosam quis laborum!
        </div>
        <div className='fifth-section__grid'></div>
        <div className='fifth-section__grid'></div>
        <div className='fifth-section__grid'>3</div>
        <div className='fifth-section__grid'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
          autem repellendus dolores sunt sapiente illo.
        </div>
        <div className='fifth-section__grid'>4</div>
        <div className='fifth-section__grid'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor magni
          accusantium aspernatur error ab atque.
        </div>
      </div>
      <ModalLanding
        isVisible={isModalLanding}
        onClose={() => setIsModalLanding(false)}
      />
      <ModalCorp
        isVisible={isModalCorp}
        onClose={() => setIsModalCorp(false)}
      />
      <ModalShop
        isVisible={isModalShop}
        onClose={() => setIsModalShop(false)}
      />
      <div className='sixth-section' id='sixth-section'>
        <div className='container'>
          <div className='sixth-section__title'>Услуги</div>
        </div>

        <div className='sixth-section__container container'>
          <ModalThree
            isVisible={isFeedback}
            onClose={() => setIsFeedback(!isFeedback)}
            body={<ModalFeedback />}
          />
          <div className='sixth-section__left-block'>
            <SliderServices
              fnOpenLanding={setIsModalLanding}
              fnOpenCorp={setIsModalCorp}
              fnOpenShop={setIsModalShop}
              fnOpenFeedback={setIsFeedback}
            />
          </div>
          <div className='sixth-section__right-block'>
            <div className='sixth-section__right-block_title'>
              В каждый заказ сайта входит
            </div>
            <div className='sixth-section__right-block_grid'>
              <div className='sixth-section__right-block_grid-item'>
                <div className='sixth-section__right-block_grid-item_title'>
                  Базовая SEO оптимизация
                </div>
                <div className='sixth-section__right-block_grid-item_suptitle'>
                  Хороший старт сайта в <br /> Яндекс и Google
                </div>
              </div>
              <div className='sixth-section__right-block_grid-item'>
                <div className='sixth-section__right-block_grid-item_title'>
                  Кроссбраузерность
                </div>
                <div className='sixth-section__right-block_grid-item_suptitle'>
                  Отличная работа сайта в <br /> разных браузерах
                </div>
              </div>
              <div className='sixth-section__right-block_grid-item'>
                <div className='sixth-section__right-block_grid-item_title'>
                  Хостинг и домен
                </div>
                <div className='sixth-section__right-block_grid-item_suptitle'>
                  Надежный <br /> и доменное имя на 1 год
                </div>
              </div>
              <div className='sixth-section__right-block_grid-item'>
                <div className='sixth-section__right-block_grid-item_title'>
                  Панель управления
                </div>
                <div className='sixth-section__right-block_grid-item_suptitle'>
                  Вы сможете <br /> редактировать <br /> информацию на сайте
                </div>
              </div>
              <div className='sixth-section__right-block_grid-item'>
                <div className='sixth-section__right-block_grid-item_title'>
                  Обучение
                </div>
                <div className='sixth-section__right-block_grid-item_suptitle'>
                  Обучение работы с <br /> панелью управления <br /> сайтом
                </div>
              </div>
              <div className='sixth-section__right-block_grid-item'>
                <div className='sixth-section__right-block_grid-item_title'>
                  Поддержка 1 год
                </div>
                <div className='sixth-section__right-block_grid-item_suptitle'>
                  Годовое сопровождение <br /> Вашего сайта
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='seventh-section'>
        <div className='seventh-section__grid-item'>Наша команда</div>
        <div className='seventh-section__grid-item'>
          <SliderTeam />
        </div>
        <div className='seventh-section__grid-item'></div>
        <div className='seventh-section__grid-item'></div>
        <div className='seventh-section__grid-item'></div>
        <div className='seventh-section__grid-item'></div>
        <div className='seventh-section__grid-item'></div>
        <div className='seventh-section__grid-item'></div>
        <div className='seventh-section__grid-item'></div>
      </div>
      <ModalThree
        onClose={() => setIsModalReview(false)}
        isVisible={isModalReview}
        body={<ModalReview />}
      />

      <div className='eighth-section' id='reviews'>
        <div className='eighth-section__container container'>
          <div className='eighth-section__title'>Отзывы</div>
          <div
            className={
              reviewsLen < 3
                ? 'eighth-section__slider two-slide'
                : 'eighth-section__slider'
            }
          >
            {reviews != null ? (
              reviews.map((obj) => <Reviews length={reviewsLen} {...obj} key={obj.id} />)
            ) : (
              <p>Отзывов нет</p>
            )}
          </div>
          <div
            className= {
              reviewsLen < 3
                ? 'eighth-section__button-block two-slide-item'
                : 'eighth-section__button-block'
            }
          >
            <button
              className='button eighth-section__button-block_item '
              onClick={() => setIsModalReview(true)}
            >
              Оставить отзыв
            </button>
          </div>
        </div>
      </div>

      <div className='feedback' id='feedback'>
        <div className='feedback__grid'>
          <div className='feedback__grid-child'>
            <div className='feedback__grid-title'>
              Давайте обсудим <span>ваш проект</span>
            </div>
            <div className='feedback__grid-suptitle'>
              Оставьте заявку и мы свяжемся с вами для уточнения деталей
            </div>
          </div>
        </div>
        <div className='feedback__grid'></div>
        <div className='feedback__grid'></div>
        <div className='feedback__grid'></div>
        <div className='feedback__grid'></div>
        <div className='feedback__grid'></div>
        <div className='feedback__grid'></div>
        <div className='feedback__grid'>
          <Feedback />
        </div>
        <div className='feedback__grid'></div>
        <div className='feedback__grid'></div>
        <div className='feedback__grid'></div>
        <div className='feedback__grid'></div>
        <div className='feedback__grid'></div>
        <div className='feedback__grid'></div>
        <div className='feedback__grid'></div>
      </div>

      <div className='footer'>
        <div className='footer__container container'>
          <div className='footer__logo'>
            <img src={images.logo} alt='' />
          </div>
          <div className='footer__social'>
            <a
              href='https://vk.com/oxygenfront'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={images.vk} alt='' />
            </a>
            <a
              href='https://t.me/oxygenfront'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={images.tg} alt='' />
            </a>
            <a
              href='https://wa.me/+79995112100?text=urlencodedtext'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={images.whatsapp} alt='' />
            </a>
          </div>
          <div className='footer__mail'>gridenflex1@gmail.com</div>
        </div>
      </div>
    </div>
  );
}

export default App;
