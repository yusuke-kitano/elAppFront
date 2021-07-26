import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { Voice } from '../libs/voice'


const useStyles = makeStyles({
  root: {
    width: 160,
    margin: 4,
  }
});

export interface abcCardProps {
  image: string,
  word: string,
  lang: string
}
export const AbcCard: FC<abcCardProps> = (props: abcCardProps) => {
  const classes = useStyles();
  const speak = () => {
    // 発言を作成
    const uttr = new SpeechSynthesisUtterance(props.word);
    uttr.text = props.word;
    // 言語 (日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
    uttr.lang = props.lang;
    const voice: Voice = new Voice(uttr.lang);
    console.log(voice)
    uttr.voice = voice.getVoice();
    uttr.rate = 0.8;
    // 再生 (発言キュー発言に追加)
    speechSynthesis.speak(uttr);
  }

  return (
    <Card className={classes.root} onClick={speak}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.word}
          height="140"
          image={props.image}
          title={props.word}
        />
      </CardActionArea>
    </Card>
  );
}