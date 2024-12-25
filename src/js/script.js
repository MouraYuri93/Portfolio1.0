window.addEventListener('scroll', () => {
	var header = document.querySelector('#header')
	header.classList.toggle('sticky', window.scrollY > 50)
})

class MobileNavbar {

	constructor(mobileMenu, nav, navLinks) {

		this.mobileMenu = document.querySelector(mobileMenu);
		this.nav = document.querySelector(nav);
		this.navLinks = document.querySelectorAll(navLinks);
		this.activeClass = "active";

		this.handleClick = this.handleClick.bind(this)
	}

	animateLinks() {
		this.navLinks.forEach((link) => {
			link.style.animation 
				? (link.style.animation = "") : (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`)
		})
	}

	handleClick() {
		this.nav.classList.toggle(this.activeClass)
		this.mobileMenu.classList.toggle(this.activeClass)
		this.animateLinks()
	}

	addClickEvent() {
		this.mobileMenu.addEventListener('click', this.handleClick)

		this.navLinks.forEach((link) =>
	      link.addEventListener("click", this.handleClick),
	    );
	}

	init() {
		if(this.mobileMenu) {
			this.addClickEvent()
		}

		return this
	}
}

const mobileNavbar = new MobileNavbar(
	"#mobile-menu",
	"#nav",
	"#nav ul li"
)

mobileNavbar.init();