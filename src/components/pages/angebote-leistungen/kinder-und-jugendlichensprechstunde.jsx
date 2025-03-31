import React, { Component } from 'react';
import Telephone from '../../telephone';

class KinderUndJugendlichensprechstunde extends Component {
    state = {  } 
    render() { 
        return  <>
                    <h2>Kinder- und Jugendlichensprechstunde</h2>
                    <p>
                        Diese Sprechstunde ist für junge Menschen, die sich mit einem Problem allein oder unsicher fühlen. Vielleicht brauchst du jemanden, der dir zuhört, weil sich bei dir zu Hause einiges verändert? Du hast etwas auf dem Herzen, bist aber unsicher, wie du es sagen sollst? Oder stehst vor einer Entscheidung und kommst nicht weiter? Vielleicht hast du auch Angst vor dem, was danach kommt?
                    </p>
                    <p>
                        Hier kannst du mit jemandem außerhalb deiner Familie über das sprechen, was dich beschäftigt. Wir hören dir zu, suchen gemeinsam nach Lösungen und unterstützen dich bei deinen nächsten Schritten – wenn du das möchtest. Du entscheidest, worüber gesprochen wird, wie schnell wir vorgehen und wer dabei sein soll.
                    </p>
                    <p>
                        Am besten rufst du mit einem Elternteil an, um einen Termin zu vereinbaren. Geht das nicht, melde dich einfach selbst und mach einen Termin aus. Lass außerdem eine Vertrauensperson wissen, dass du bei uns bist. Du kannst auch jemanden mitbringen, wenn du möchtest.
                    </p>
                    <p>
                        Ruf uns gerne an: <Telephone />
                    </p>
                </>;
        
    }
}
 
export default KinderUndJugendlichensprechstunde;