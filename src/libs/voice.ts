export class Voice {
    voiceType: SpeechSynthesisVoice
    constructor(lang: string) {
        if (lang === 'ja-JP') {
            this.voiceType = speechSynthesis.getVoices().filter(voice => voice.name == 'Android Googleテキスト読み上げエンジン ja-jp-x-htm-local')[0];
        } else {
            this.voiceType = speechSynthesis.getVoices().filter(voice => voice.name == 'Chrome OS US English 3')[0];
        }
    }
    getVoice() {
        return this.voiceType;
    }
}