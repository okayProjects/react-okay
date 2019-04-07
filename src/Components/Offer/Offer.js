import React from 'react';
import style from './Offer.module.css';
import OfferDescription from './OfferDescription/OfferDescription';
import OfferPicture from './OfferPicture/OfferPicture';
import Logo from '../../Components/UI/Logo/Logo';
import ge1 from '../../assets/ge1.jpg';
import b2b1 from '../../assets/b2b1.jpg';
import uk1 from '../../assets/uk1.jpg';
import ge2 from '../../assets/ge2.jpg';
import b2b2 from '../../assets/b2b2.jpg';
import uk2 from '../../assets/uk2.jpg';
import ge3 from '../../assets/ge3.jpg';
import b2b3 from '../../assets/b2b3.jpg';
import uk3 from '../../assets/uk3.jpg';
import ge4 from '../../assets/ge4.jpg';
import b2b4 from '../../assets/b2b4.jpg';
import uk4 from '../../assets/uk4.jpg';


const offer = (props) => {

    const offerActive = [style.Offer];
    if (props.offerActive) {
        offerActive.push(style.OfferActive);
    }

    const headings = ['angielski ogólny', 'angielski w biznesie', 'angielski w anglii'];
    const paragraphs = ['Szczypta teorii i cała micha praktyki w świetnej atmosferze. Oferta skierowana zarówno do dzieci młodzieży, jak i do tej nieco starszej młodzieży już w średnim wieku.', 'BYZNES Duis duis nisi magna voluptate ea dolore duis enim fugiat nisi ipsum irure.', 'ANGLIA Sit in adipisicing aute voluptate pariatur irure exercitation do.'];


    const offer = [
        {
            h1: 'angielski ogólny',
            p1: 'zajęcia grupowe',
            p2: 'zajęcia indywidualne',
            p3: 'matura i egzamin po ósmej klasie',
            p4: 'egzaminy Cambridge'
        },
        {
            h1: 'angielski biznesowy',
            p1: 'zajęcia dopasowane do potrzeb Klienta',
            p2: 'elastyczne godziny pracy',
            p3: 'zajęcia indywidualne',
            p4: 'zajęcia grupowe'
        },
        {
            h1: 'angielski w anglii',
            p1: 'międzynarodowe grupy',
            p2: 'mocno zróżnicowane formy nauki',
            p3: "24 godzinna opieka team leader'a",
            p4: 'zajęcia pozalekcyjne i kulturowe'
        },
    ];

    const photos = [
        {
            ge1: ge1,
            ge2: ge2,
            ge3: ge3,
            ge4: ge4
        },
        {
            b2b1: b2b1,
            b2b2: b2b2,
            b2b3: b2b3,
            b2b4: b2b4
        },
        {
            uk1: uk1,
            uk2: uk2,
            uk3: uk3,
            uk4: uk4
        }
    ]

    const banner = offer.map((type, index) => (
        <OfferPicture key={type + index} type={Object.values(type)} src={Object.values(photos[index])} alt={Object.keys(photos)} />
    ))

    const typeOfOffer = headings.map((heading, index) => (
        <OfferDescription key={heading + index} heading={heading} paragraph={paragraphs[index]} />
    ));

    return (
        <div className={offerActive.join(' ')}>
            {props.offerActive && <Logo />}
            {banner}
            {typeOfOffer}
        </div>
    )
}

export default offer;