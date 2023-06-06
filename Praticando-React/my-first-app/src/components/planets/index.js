import React, { Fragment } from 'react';
import Planet from '../planet';





const Planets = () => {
  return (
    <Fragment>
      <h3>Planet List</h3>
      <hr />
      <Planet name="Mercúrio"
        description="Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar"
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
        link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)#:~:text=Merc%C3%BArio%20%C3%A9%20um%20dos%20quatro,de%202%20439%2C7%20km."
        gray={true}
      />
      <Planet name="Plutão"
        description="Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta"
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg"
        //link="https://pt.wikipedia.org/wiki/Plut%C3%A3o"
        gray={true}
      />"
    </Fragment>
  )
}

export default Planets