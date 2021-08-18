import './App.css'
import React from 'react'

import Primeiro from './components/Primeiro'
import ComParamentro from './components/ComParamentro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import CondicionalComIf from './components/CondicionalComIf'

export default (props) => (
   <div className="App">

      <Card titulo="#06 - Condicional Com If">
         <CondicionalComIf numero={11}></CondicionalComIf>
      </Card>

      <Card titulo="#05 - Condicional">
         <Condicional numero={10}></Condicional>
      </Card>

      <Card titulo="#04 - Repetição">
         <Repeticao></Repeticao>
      </Card>

      <Card titulo="#03 - Componente Com Filho">
         <ComFilhos>
            <ul>
               <li>Ana</li>
               <li>Bia </li>
               <li>Carlos</li>
               <li>Daniel</li>
            </ul>
         </ComFilhos>
      </Card>

      <Card titulo="#02 - Componente Com Paramentro">
         <ComParamentro titulo="Esse é o título"
            subtitulo="Esse é o subtítulo" />
      </Card>

      <Card titulo="#01 - Primeiro Componente">
         <Primeiro></Primeiro>
      </Card>
   </div>
)
