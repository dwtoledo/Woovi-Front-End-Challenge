
import ShieldOpaqueIcon from "../assets/icons/opaque-shield-icon.svg"
import WooviOpaqueLogo from "../assets/images/opaque-logo.svg"

export function Footer () {
  return (
  <footer className="flex gap-1 justify-center items-center my-9">
    <img src={ShieldOpaqueIcon} alt="Ícone de um Escudo" className="h-4" />
    <span className="font-semibold text-sm text-muted-foreground">Pagamento 100% seguro via:</span>
    <img src={WooviOpaqueLogo} alt="Woovi Logotipo" className="h-4" />
  </footer>)
}