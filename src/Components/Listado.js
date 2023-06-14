import Item from "./Item";

import "../stylesheets/Listado.css";

export default function Listado() {

    return (

        <div>

            <h1 className="title-principal"> CHARACTERS OF THE LION KING</h1>

                <div className="informacion-relevante">

                    <Item
                        img="facemufasa"
                        img2="mufasa"
                        name="MUFASA"
                        animal="León"
                        tipo="El rey"
                        descripcion="Es el padre de Simba, el esposo de Sarabi, el hermano mayor de Scar y el Rey de las Tierras del Reino al comienzo de la película."
                        personalidad="Noble, fiel, confiado, fuerte, aspirante, digno, protector, poderoso, paternal, comprensivo, racional, justo, juguetón, amoroso, humilde, optimista, paciente, malhumorado a veces, instructivo, poderoso, regio, desinteresado y sabio"
                    />

                    <Item
                        img="facezazu"
                        img2="zazu"
                        name="ZAZÚ"
                        animal="Toco piquirojo"
                        tipo="Mayordomo del rey Mufasa"
                        descripcion="Es el mayordomo real del Rey Mufasa. Él se encarga de vigilar el reino desde las alturas y de estar pendiente de Simba y Nala, siendo la víctima de muchas bromas de éstos."
                        personalidad="Leal, inteligente, obediente, organizado, apropiado, digno, serio, cuidadoso, cobarde, febril, un poco excéntrico, paranoico, feroz, fácil de chocar, cínico, irritable."
                    />


                    <Item
                        img="facescar"
                        img2="scar"
                        name="SCAR"
                        animal="León"
                        tipo="Hermano de Mufasa"
                        descripcion="Es el villano principal de la película The Lion King. Era el segundo hijo de Ahadi y Uru—que eran, en algún momento, Rey y Reina de las Tierras del Reino—el hermano menor de Mufasa y el tío de Simba."
                        personalidad="Malvado, mentiroso, cruel, sádico, celoso, hambrientos de poder, manipulador, inteligente, egoista, abusivo, fria, vanidoso, arrogante, misterioso, megalomaníaco, pomposo, asesino, cobarde, resentido, egoísta, codicioso, obsequioso, tiránico, carismático, sarcástico, astuto, malhumorado, perezoso, traicionero, oportunista, tranquilo, elegante, seductor, dramático, despiadado"
                    />

                    <Item
                        img="facehyena"
                        img2="hyena"
                        name="BANZAI"
                        animal="Hyena"
                        tipo="Aliada de Scar"
                        descripcion="Uno de los tres carroñeras viles y desagradables que, junto a todas las de su estirpe, fueron expulsadas por Mufasa a las Tierras Oscuras. Banzai, Shenzi y Ed siempre están hambrientas, y están dispuestas a todo por un bocadito de carne fresca, y Scar se lo puede proporcionar, por eso, harán lo que él le pida. Son los personajes más siniestros del Rey León."
                        personalidad="Es el más agresivo del trío de hienas, casi no tiene control sobre sí mismo y siempre está listo para arremeter o iniciar una pelea. Sin embargo, porque piensa con la fuerza y habla sin pensar, él no es el líder del trío y siempre se somete a Shenzi, obedeciendo constantemente sus órdenes."
                    />


                    <Item
                        img="facerafiki"
                        img2="rafiki"
                        name="RAFIKI"
                        animal="Babuino"
                        tipo="Viejo y sabio"
                        descripcion="Es un mono viejo y sabio similar a un mandril que aparece solo en momentos oportunos para enderezar el camino de los protagonistas de la historia. Se comporta como un chamán y parece tener la habilidad de comunicarse con los espíritus de los antiguos reyes, además de predecir el futuro."
                        personalidad="Tiene sexto sentido y sabe Kung Fu"
                    />

                    <Item
                        img="facesimba"
                        img2="simba"
                        name="SIMBA"
                        animal="León"
                        tipo="El próximo rey"
                        descripcion=" Es el único hijo de Mufasa, el rey de la sabana y jefe de “La Roca del Rey”. Su madre es la reina Sarabi, es sobrino de Scar, el hermano de Mufasa. Está siempre acompañado por su amiga Nala, y por el mayordomo real, Zazu, quien siempre está pendiente de ambos."
                        personalidad="Es curioso, aventurero, arrogante y muy dispuestos a convertirse en rey"
                    />

                    <Item
                        img="facenala"
                        img2="nala"
                        name="NALA"
                        animal="León"
                        tipo="La próxima reina"
                        descripcion="Es una amiga cercana y compañera de juegos de Simba con quien nunca tiene miedo de ir a explorar o hacer travesuras. Más tarde se convertiría en su esposa"
                        personalidad="Aventurera, cariñosa, traviesa, limpia, honesta, responsable, segura, firme, valiente, independiente, determinada, honorable, franca, generosa, leal, amante de la diversión, severa, de carácter fuerte, astuta, protectora, incorruptible, compasiva, dulce y maternal"
                    />

                    <Item
                        img="facetimon"
                        img2="timon"
                        name="TIMÓN"
                        animal="Suricato"
                        tipo="Cómico"
                        descripcion="Es el mejor amigo de Pumba . Al crecer en una colonia de suricatas , lejos de la Pridelands , que no tiene habilidad para cavar túneles a diferencia de la mayoría de sus compañeros de suricatas, y mientras estaba de guardia, se recurre a soñar despierto."
                        personalidad="Es cómico y chistoso. Sin embargo, Timon parece ser egoísta, pero muestra un gran corazón"
                    />

                    <Item
                        img="facepumba"
                        img2="pumba"
                        name="PUMBA"
                        animal="Jabalí"
                        tipo="Gordo y alegre"
                        descripcion="Pumba tuvo problemas con los gases cuando era joven, para Pumba, fue muy embarazoso, debido a eso ha vivido en soledad y aislamiento hasta que conoció a Timón."
                        personalidad="Inteligente,torpe, divertido, alegre, desinteresado, amable, genuino, confiable, devoto, colaborador, tonto, juicioso, infantil, emocional, humorístico, talentoso, leal, despistado, ingenioso, aventurero, optimista, valiente, pensativo, sin carácter (a veces), dulce, justo, respetuoso, compasivo"
                    />

                </div>
            </div>
    )

};
