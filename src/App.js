import React, { Component } from 'react';
import classes from './Buttons.module.css';
import getFourRndImages from './components/getFourRndImages';
import PlaySound from './components/PlaySound';
import ImageButton from './components/ImageButton';
import RepeatButton from './components/RepeatButton';

class App extends Component {
  state = {
    imgList: [
      { id: 0, img: require('./assets/images/0.jpg'), sound: require('./assets/sounds/0.m4a'), name: 'БЕЛЫЙ ГРИБ' },
      { id: 1, img: require('./assets/images/1.jpg'), sound: require('./assets/sounds/1.m4a'), name: 'ДУБОВИК' },
      { id: 2, img: require('./assets/images/2.jpg'), sound: require('./assets/sounds/2.m4a'), name: 'ЛИСИЧКИ' },
      { id: 3, img: require('./assets/images/3.jpg'), sound: require('./assets/sounds/3.m4a'), name: 'МАСЛЯТЯ' },
      { id: 4, img: require('./assets/images/4.jpg'), sound: require('./assets/sounds/4.m4a'), name: 'МОХОВИК' },
      { id: 5, img: require('./assets/images/5.jpg'), sound: require('./assets/sounds/5.m4a'), name: 'ОПЯТА' },
      { id: 6, img: require('./assets/images/6.jpg'), sound: require('./assets/sounds/6.m4a'), name: 'ПОДБЕРЁЗОВИК' },
      { id: 7, img: require('./assets/images/7.jpg'), sound: require('./assets/sounds/7.m4a'), name: 'ПОДОСИНОВИК' },
      { id: 8, img: require('./assets/images/8.jpg'), sound: require('./assets/sounds/8.m4a'), name: 'РЫЖИК' },
      { id: 9, img: require('./assets/images/9.jpg'), sound: require('./assets/sounds/9.m4a'), name: 'СЫРОЕЖКА' },
      { id: 10, img: require('./assets/images/10.jpg'), sound: require('./assets/sounds/10.m4a'), name: 'ГРУЗДИ' },
      { id: 11, img: require('./assets/images/11.jpg'), sound: require('./assets/sounds/11.m4a'), name: 'ВЕШЕНКА' },
      { id: 12, img: require('./assets/images/12.jpg'), sound: require('./assets/sounds/12.m4a'), name: 'ВОЛНУШКА' },
      { id: 13, img: require('./assets/images/13.jpg'), sound: require('./assets/sounds/13.m4a'), name: 'НАВОЗНИК' },
      { id: 14, img: require('./assets/images/14.jpg'), sound: require('./assets/sounds/14.m4a'), name: 'ГОВОРУШКА' },
      { id: 15, img: require('./assets/images/15.jpg'), sound: require('./assets/sounds/15.m4a'), name: 'КОРОЛЕВСКИЙ ОПЁНОК' },
      { id: 16, img: require('./assets/images/16.jpg'), sound: require('./assets/sounds/16.m4a'), name: 'СВИНУШКА' },
      { id: 17, img: require('./assets/images/17.jpg'), sound: require('./assets/sounds/17.m4a'), name: 'ШАМПИНЬОН' },
      { id: 18, img: require('./assets/images/18.jpg'), sound: require('./assets/sounds/18.m4a'), name: 'СТРОЧОК' },
      { id: 19, img: require('./assets/images/19.jpg'), sound: require('./assets/sounds/19.m4a'), name: 'СТРОФАРИЯ СИНЕ-ЗЕЛЕНАЯ' },
      { id: 20, img: require('./assets/images/20.jpg'), sound: require('./assets/sounds/20.m4a'), name: 'ТРЮФЕЛЬ' },
      { id: 21, img: require('./assets/images/21.jpg'), sound: require('./assets/sounds/21.m4a'), name: 'ТРУТОВИК' },
      { id: 22, img: require('./assets/images/22.jpg'), sound: require('./assets/sounds/22.m4a'), name: 'МУХОМОР КРАСНЫЙ' },
      { id: 23, img: require('./assets/images/23.jpg'), sound: require('./assets/sounds/23.m4a'), name: 'МУХОМОР ПАНТЕРНЫЙ' },
      { id: 24, img: require('./assets/images/24.jpg'), sound: require('./assets/sounds/24.m4a'), name: 'МУХОМОР БЕЛЫЙ' },
      { id: 25, img: require('./assets/images/25.jpg'), sound: require('./assets/sounds/25.m4a'), name: 'БЛЕДНАЯ ПОГАНКА' },
      { id: 26, img: require('./assets/images/26.jpg'), sound: require('./assets/sounds/26.m4a'), name: 'РЯДОВКА ЯДОВИТАЯ' },
      { id: 27, img: require('./assets/images/27.jpg'), sound: require('./assets/sounds/27.m4a'), name: 'ЛОЖНООПЁНОК' },
      { id: 28, img: require('./assets/images/28.jpg'), sound: require('./assets/sounds/28.m4a'), name: 'ЛЕПИОТА КОРИЧНЕВО-КРАСНАЯ' },
      { id: 29, img: require('./assets/images/29.jpg'), sound: require('./assets/sounds/29.m4a'), name: 'ПАУТИННИК' },
      { id: 30, img: require('./assets/images/30.jpg'), sound: require('./assets/sounds/30.m4a'), name: 'ЖЕЛЧНЫЙ ГРИБ' },
      { id: 31, img: require('./assets/images/31.jpg'), sound: require('./assets/sounds/31.m4a'), name: 'СМАРЧОК' }
    ],
      rndImages: [0, 0, 0, 0], //Хранятся индексы imgList 4-х картинок
      questionIndex: 0,
      maxArray: 31,
      correctAnswer: false,
      playResultAnswer: false,
      playError: true,
      playQuestion: true,
      gameOver: false,    
      countCorrectAnswer: 0,
      countWrongAnswer: 0,
      showImage: false
  };

  componentDidMount() {
    this.initialState(this.state.maxArray);    
  }

  initialState = (maxArray) => {
    const rndIndexes = getFourRndImages(maxArray); //Получить 4 случайных индекса из массива imgList         
    const questionIndex = Math.floor(Math.random() * 4 ); //Индекс озвученной картинки 
    
    this.setState( { rndImages: rndIndexes, questionIndex: questionIndex } ); //Запомнить 4 картинки и индекс озвученной картинки 
  }
  
  changeImgList = (buttonIndex) => {
    let tmpArray = this.state.imgList;  //imgList записываю во временный массив 
    const rndImages = this.state.rndImages; //ХРАНЯТСЯ ИНДЕКСЫ!
    const maxArray = this.state.maxArray;
    const idImage = tmpArray[rndImages[buttonIndex]].id; //Нахожу картинку по индексу кнопки

    const imageIndex = tmpArray.findIndex(idImg => idImg.id === idImage); //Нахожу индекс картинки в imgList по картинке
    tmpArray.splice(imageIndex, 1);  //Удаляю эту картинку из imgList
  
    const rndIndexes = getFourRndImages(maxArray-1); //Получить 4 случайных индекса из массива imgList
         
    const questionIndex = Math.floor(Math.random() * 4 ); //Индекс озвученной картинки 

    this.setState( {imgList: tmpArray, maxArray: (maxArray-1), rndImages: rndIndexes, questionIndex: questionIndex, correctAnswer: false, playResultAnswer: false, showImage: false} ); 

    console.log("Размер массива: " + this.state.imgList.length);
  };
  
  
  checkAnswer = (buttonIndex) => {  
    if (buttonIndex === this.state.questionIndex) {
      if (this.state.imgList.length > 4) {
       this.setState( {questionIndex: buttonIndex, correctAnswer: true, playResultAnswer: true, playError: false, countCorrectAnswer: this.state.countCorrectAnswer + 1, showImage: true} ); 
      } 
      else {
        this.setState({gameOver: true}); 
//        alert("УРА! ФАНФАРЫ!");
      } 
    } 
    else {
     this.setState( (state) => ({ correctAnswer: false, playResultAnswer: true, playError: !state.playError, countWrongAnswer: this.state.countWrongAnswer + 1 }) ); 
    }    
  };
 
  repeatAnswer = () => {
   this.setState( (state) => ({ playQuestion: !state.playQuestion }) ); 
  };

  render() {  
  
    let nextButton, playQuestion, playAnswer, playGameOver;

    if (this.state.playResultAnswer === true) {
      if (this.state.correctAnswer === false ) {
        nextButton = null; //Прячем кнопку
        if (this.state.playError === true) {
          playAnswer = (
            <PlaySound urlStr= { require('./assets/sounds/e1.mp3') } />    
          );
        }      
        else {
          playAnswer = (
            <PlaySound urlStr= { require('./assets/sounds/e3.mp3') } />    
          );
        }
      }
      else {
        playAnswer = (
          <PlaySound urlStr= { require('./assets/sounds/s1.mp3') } />    
        );
        nextButton = ( //Показываем кнопку
          <div className={classes.column}>
             <img className={classes.OrderBtnNext}
               onClick={() =>  {this.changeImgList(this.state.questionIndex)} }
               src= {require('./assets/arrows/arrow2.png')} 
               alt = '' />
          </div>
        );
      };    
    }

    if (this.state.playQuestion === true) {
      playQuestion = (
        <PlaySound urlStr= { this.state.imgList[this.state.rndImages[this.state.questionIndex]].sound} />    
      );
    }
    else {
     playQuestion = ( //playQuestion во второй раз включает <div>, чтобы был рендеринг! 
       <div>  
         <PlaySound urlStr= { this.state.imgList[this.state.rndImages[this.state.questionIndex]].sound} />    
       </div>
     );
    }

    if (this.state.gameOver === true) {
      playGameOver = (
        <PlaySound urlStr= { require('./assets/sounds/s1.wav') } />    
      );
    }

    return (
      <div>
        {playQuestion}
        {playAnswer}
        {playGameOver}
        <div className={classes.row}>
            <ImageButton
              classButton = { (this.state.questionIndex === 0 && this.state.showImage) ? classes.CorrectButton : classes.OrderButton }
              click = {this.checkAnswer.bind(this, 0)} //it's more effectively than: click = {() => {this.checkAnswer(0)}}
              img = { this.state.showImage ? this.state.imgList[this.state.rndImages[0]].img : require('./assets/images/empty.jpg')}
              name = {this.state.imgList[this.state.rndImages[0]].name}  />

            <ImageButton
              classButton = { (this.state.questionIndex === 1 && this.state.showImage) ? classes.CorrectButton : classes.OrderButton }
              click = {this.checkAnswer.bind(this, 1)} 
              img = { this.state.showImage ? this.state.imgList[this.state.rndImages[1]].img : require('./assets/images/empty.jpg')}
              name = {this.state.imgList[this.state.rndImages[1]].name}  />
            
            <RepeatButton
              click = {this.repeatAnswer.bind(this)} 
              img = {require('./assets/arrows/speaker1.png')}
              count1 = {this.state.countCorrectAnswer}  
              count2 = {this.state.countWrongAnswer}  />
        </div>
        <div className={classes.row}>
            <ImageButton
              classButton = { (this.state.questionIndex === 2 && this.state.showImage) ? classes.CorrectButton : classes.OrderButton }
              click = {this.checkAnswer.bind(this, 2)} 
              img = { this.state.showImage ? this.state.imgList[this.state.rndImages[2]].img : require('./assets/images/empty.jpg')}
              name = {this.state.imgList[this.state.rndImages[2]].name}  />

            <ImageButton
              classButton = { (this.state.questionIndex === 3 && this.state.showImage) ? classes.CorrectButton : classes.OrderButton }
              click = {this.checkAnswer.bind(this, 3)} 
              img = { this.state.showImage ? this.state.imgList[this.state.rndImages[3]].img : require('./assets/images/empty.jpg')}
              name = {this.state.imgList[this.state.rndImages[3]].name}  />
          
            {nextButton}
        </div>
      </div>
    );
  }
}

export default App;


