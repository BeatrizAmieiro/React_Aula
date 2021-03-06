import './App.css'
import React from 'react'

import Primeiro from './components/basico/Primeiro'
import ComParamentro from './components/basico/ComParamentro'
import ComFilhos from './components/basico/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basico/Repeticao'
import Condicional from './components/basico/Condicional'
import CondicionalComIf from './components/basico/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

export default (props) => (
   <div className="App">

      <h1>Fundamentos React</h1>

      <div className="Cards">

         <Card titulo="#11 - Mega" color="#73503C">
            <Mega qtdeNumero={8}></Mega>
         </Card>

         <Card titulo="#10 - Input" color="#293E6A">
            <Contador passo={10} valor={100}></Contador>
         </Card>

         <Card titulo="#09 - Input" color="#9C0F5F">
            <Input></Input>
         </Card>

         <Card titulo="#08 - Comunicação Indireta" color="#000">
            <Super></Super>
         </Card>

         <Card titulo="#07 - Comunicação Direta" color="#4298B5">
            <Pai sobrenome="Freitas"></Pai>
         </Card>

         <Card titulo="#06 - Condicional Com If" color="#FA6900">
            <CondicionalComIf numero={11}></CondicionalComIf>
         </Card>

         <Card titulo="#05 - Condicional" color="#E94C6F">
            <Condicional numero={10}></Condicional>
         </Card>

         <Card titulo="#04 - Repetição" color="#008BBA">
            <Repeticao></Repeticao>
         </Card>

         <Card titulo="#03 - Componente Com Filho" color="#D96459">
            <ComFilhos>
               <ul>
                  <li>Ana</li>
                  <li>Bia </li>
                  <li>Carlos</li>
                  <li>Daniel</li>
               </ul>
            </ComFilhos>
         </Card>

         <Card titulo="#02 - Componente Com Paramentro" color="#FF85CB">
            <ComParamentro titulo="Esse é o título"
               subtitulo="Esse é o subtítulo" />
         </Card>

         <Card titulo="#01 - Primeiro Componente" color="#92B06A">
            <Primeiro></Primeiro>
         </Card>
      </div>
   </div>
)
