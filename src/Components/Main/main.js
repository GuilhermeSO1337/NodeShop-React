import './main.css';
import Loja from '../../Imgs/loja.jpg';

function Main () {
    return (
        <div className='Main'>
            <div className="principal">
			<article className="sobre">
				<h2> Sobre nós </h2>
				<img src={Loja}/>
				<p> Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
				Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
				</p>
			</article>
			<aside class="onde-estamos">
				<h2> Onde estamos </h2>
				<p> Av. Jucá Leão - Centro Comercial, Itabuna - BA </p>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.52748707274!2d-39.28678145023931!3d-14.795624603070642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x739aaf0cc0db597%3A0x9dfa10026b580036!2sAv.+Juc%C3%A1+Le%C3%A3o+-+Centro+Comercial%2C+Itabuna+-+BA!5e0!3m2!1spt-BR!2sbr!4v1449945134287"></iframe>
				<h2> Contatos </h2>
				<ul>
					<li> <i class="fa fa-phone fa-lg"></i> (73) 919173350 </li>
					<li> <i class="fa fa-whatsapp fa-lg"></i> (73) 919173350 </li>
					<li> <i class="fa fa-envelope fa-lg"></i> rodrigosantosweb@gmail.com </li>
				</ul>
			</aside>	    
           	
		</div>
        <section class="newsletter">
			<h3> Newsletter </h3>
			<p> Receba nossas promoções por email </p>
			<form method="post">
				<input type="text" placeholder="Seu nome"/>
				<input type="email" placeholder="Seu email"/>
				<button> Cadastrar </button>
			</form>
		</section>	
        </div>
        
    )
}

export default Main;