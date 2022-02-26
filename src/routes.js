import RegisterImage from './components/register/RegisterImage.vue'
import Home from './components/home/Home.vue'

export const routes = [
    {path: '', component: Home, title: 'Home'},
    {path: '/register', component: RegisterImage, title: 'Cadastrar nova Imagem'}
];