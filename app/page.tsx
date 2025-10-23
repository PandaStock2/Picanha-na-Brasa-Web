"use client"

import {
  Phone,
  MapPin,
  Clock,
  Instagram,
  Send,
  Flame,
  UtensilsCrossed,
  Heart,
  Award,
  Users,
  TrendingUp,
  Copy,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { useState } from "react"
import { MenuModal } from "@/components/menu-modal"
import { MobileNav } from "@/components/mobile-nav"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [pixCopied, setPixCopied] = useState(false)

  const copyPixKey = async () => {
    try {
      await navigator.clipboard.writeText("14673352661")
      setPixCopied(true)
      setTimeout(() => setPixCopied(false), 3000)
    } catch (err) {
      console.error("Erro ao copiar chave PIX:", err)
    }
  }

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <MobileNav />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden fire-overlay"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#0a0a0a] to-[#1A1A1A]" />
        <div className="absolute inset-0 bg-[url('/grilled-meat-on-barbecue-flames.jpg')] bg-cover bg-center opacity-15 mix-blend-overlay" />

        <div className="absolute top-20 left-10 w-48 h-48 bg-[#D62828] rounded-full blur-[140px] opacity-25 flame-flicker" />
        <div
          className="absolute bottom-20 right-10 w-56 h-56 bg-[#F77F00] rounded-full blur-[160px] opacity-25 flame-flicker"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#D62828] rounded-full blur-[180px] opacity-15 flame-flicker"
          style={{ animationDelay: "3s" }}
        />

        <div className="container mx-auto relative z-10 px-4 py-20 text-center">
          <div className="mb-8 md:mb-12 flex justify-center slide-up-fade">
            <div className="relative fire-glow rounded-3xl p-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Picanha%20na%20Brasa-uA5Q6GNzrhnE7oiyTvb38b76cPwWHG.jpg"
                alt="Picanha na Brasa Logo"
                width={500}
                height={333}
                className="h-auto w-64 sm:w-72 md:w-96 lg:w-[28rem] drop-shadow-2xl rounded-2xl"
                priority
              />
            </div>
          </div>

          <h1
            className="mb-6 md:mb-8 text-balance font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#FFFFFF] leading-none tracking-tight slide-up-fade uppercase px-4"
            style={{ animationDelay: "0.2s" }}
          >
            Sabor Autêntico
            <br />
            <span className="gradient-text-fire text-6xl sm:text-7xl md:text-8xl lg:text-9xl">de Churrasco</span>
          </h1>

          <p
            className="mx-auto mb-10 md:mb-12 max-w-3xl text-pretty text-lg sm:text-xl md:text-2xl leading-relaxed text-zinc-300 font-medium slide-up-fade px-4"
            style={{ animationDelay: "0.4s" }}
          >
            No dia{" "}
            <span className="font-bold text-[#F77F00] px-3 sm:px-4 py-2 bg-[#F77F00]/15 rounded-xl border-2 border-[#F77F00]/30 inline-block">
              25 de outubro
            </span>
            , venha saborear nossos deliciosos espetinhos preparados com muito capricho pela turma do Colégio Talentos.
          </p>

          <div
            className="mb-12 md:mb-16 flex flex-col items-center gap-4 sm:gap-5 sm:flex-row sm:justify-center slide-up-fade px-4"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto gap-3 gradient-fire text-[#FFFFFF] font-bold px-10 py-8 text-xl shadow-2xl hover:shadow-[0_20px_50px_rgba(214,40,40,0.4)] transition-all duration-300 hover:scale-105 rounded-xl"
              asChild
            >
              <a href="#cardapio">
                <UtensilsCrossed className="h-6 w-6" />
                Ver Cardápio Completo
              </a>
            </Button>
            <Button
              size="lg"
              className="w-full sm:w-auto gap-3 border-3 border-[#F77F00] bg-transparent text-[#F77F00] hover:bg-[#F77F00] hover:text-[#FFFFFF] font-bold px-10 py-8 text-xl transition-all duration-300 hover:scale-105 rounded-xl shadow-lg"
              asChild
            >
              <a href="#contato">
                <Phone className="h-6 w-6" />
                Fazer Pedido
              </a>
            </Button>
          </div>

          <div
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-5 text-sm sm:text-base slide-up-fade px-4"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="flex items-center gap-3 bg-[#0a0a0a]/90 backdrop-blur-md px-6 py-4 rounded-full border-2 border-[#F77F00]/30 shadow-lg">
              <Clock className="h-5 w-5 text-[#F77F00]" />
              <span className="font-bold text-[#FFFFFF]">9h às 13h</span>
            </div>
            <div className="flex items-center gap-3 bg-[#0a0a0a]/90 backdrop-blur-md px-6 py-4 rounded-full border-2 border-[#F77F00]/30 shadow-lg">
              <MapPin className="h-5 w-5 text-[#F77F00]" />
              <span className="font-bold text-[#FFFFFF]">Av. Constelação, 1175</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-3 border-[#F77F00]/60 rounded-full flex items-start justify-center p-2">
            <div className="w-2 h-4 bg-[#F77F00] rounded-full pulse-glow" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative bg-gradient-to-b from-[#0a0a0a] to-[#1A1A1A] py-24 md:py-32 overflow-hidden section-divider-fire">
        <div className="container mx-auto relative z-10 px-4">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-[#D62828]/15 border-2 border-[#D62828]/30 px-6 py-3 rounded-full mb-8">
                <Flame className="h-6 w-6 text-[#F77F00]" />
                <span className="text-[#F77F00] font-bold text-base uppercase tracking-widest">Projeto Estudantil</span>
              </div>
              <h2 className="mb-8 font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#FFFFFF] leading-none uppercase tracking-tight">
                Empreendedorismo <span className="gradient-text-fire">na Prática</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="card-bbq p-8 text-center">
                <div className="w-20 h-20 rounded-full gradient-fire flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Users className="h-10 w-10 text-[#FFFFFF]" />
                </div>
                <h3 className="font-bold text-[#FFFFFF] text-2xl mb-3 font-display uppercase">Trabalho em Equipe</h3>
                <p className="text-zinc-400 text-base leading-relaxed">
                  Desenvolvendo habilidades de colaboração e liderança
                </p>
              </Card>

              <Card className="card-bbq p-8 text-center">
                <div className="w-20 h-20 rounded-full gradient-fire flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <TrendingUp className="h-10 w-10 text-[#FFFFFF]" />
                </div>
                <h3 className="font-bold text-[#FFFFFF] text-2xl mb-3 font-display uppercase">Gestão Financeira</h3>
                <p className="text-zinc-400 text-base leading-relaxed">
                  Aprendendo sobre administração e finanças na prática
                </p>
              </Card>

              <Card className="card-bbq p-8 text-center">
                <div className="w-20 h-20 rounded-full gradient-fire flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Award className="h-10 w-10 text-[#FFFFFF]" />
                </div>
                <h3 className="font-bold text-[#FFFFFF] text-2xl mb-3 font-display uppercase">Empreendedorismo</h3>
                <p className="text-zinc-400 text-base leading-relaxed">Criando e gerenciando um negócio real</p>
              </Card>
            </div>

            <Card className="card-bbq p-10 md:p-12 backdrop-blur-md">
              <p className="text-pretty text-xl md:text-2xl leading-relaxed text-zinc-300 text-center font-medium">
                O projeto faz parte da{" "}
                <span className="font-bold text-[#F77F00]">Feira Gastronômica da Escola Talentos</span>, que incentiva o
                empreendedorismo, o trabalho em equipe e o aprendizado sobre administração e finanças. Cada espetinho
                vendido nos aproxima do nosso sonho de formatura!
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="cardapio" className="relative bg-[#1A1A1A] py-20 md:py-32 section-divider-fire">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-flex items-center gap-3 bg-[#F77F00]/15 border-2 border-[#F77F00]/30 px-5 py-2.5 md:px-6 md:py-3 rounded-full mb-6 md:mb-8">
              <UtensilsCrossed className="h-5 w-5 md:h-6 md:w-6 text-[#F77F00]" />
              <span className="text-[#F77F00] font-bold text-sm md:text-base uppercase tracking-widest">Cardápio</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#FFFFFF] leading-none uppercase tracking-tight px-4">
              Nosso <span className="gradient-text-fire">Cardápio</span>
            </h2>
            <p className="mt-4 md:mt-6 text-zinc-400 text-base md:text-xl max-w-2xl mx-auto font-medium px-4">
              Espetinhos preparados com ingredientes selecionados e muito sabor
            </p>
          </div>

          <div className="mx-auto max-w-5xl mb-12 md:mb-20 px-2">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="relative group w-full cursor-pointer touch-manipulation"
              aria-label="Abrir cardápio em tela cheia"
            >
              <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-[#D62828] to-[#F77F00] rounded-2xl md:rounded-3xl blur-xl md:blur-2xl opacity-40 group-hover:opacity-70 transition duration-500" />
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2D4WBBhZpUum64PV7jm42utQcfaFyt.png"
                  alt="Cardápio Picanha na Brasa - Clique para ampliar"
                  width={1200}
                  height={800}
                  className="relative h-auto w-full rounded-2xl md:rounded-3xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#1A1A1A]/70 rounded-2xl md:rounded-3xl backdrop-blur-sm">
                  <div className="text-center px-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-[#D62828] to-[#F77F00] flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-2xl">
                      <UtensilsCrossed className="h-8 w-8 md:h-10 md:w-10 lg:h-8 lg:w-8 text-white" />
                    </div>
                    <p className="text-white font-bold text-xl md:text-2xl font-display uppercase">
                      Clique para Ampliar
                    </p>
                    <p className="text-zinc-300 text-xs md:text-sm mt-2">Visualize o cardápio completo</p>
                  </div>
                </div>
              </div>
            </button>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 md:justify-items-center">
              {/* Gourmet Card */}
              <Card className="card-bbq p-6 md:p-8 lg:p-9 backdrop-blur-md w-full max-w-md md:max-w-none">
                <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                  <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full gradient-fire flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-xl">
                    <UtensilsCrossed className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-[#FFFFFF]" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-[#F77F00] uppercase">Gourmet</h3>
                </div>
                <div className="space-y-4 md:space-y-5">
                  <div className="pb-4 border-b-2 border-zinc-800">
                    <div className="flex justify-between items-start gap-3 mb-1">
                      <span className="font-bold text-[#FFFFFF] text-base md:text-lg">Prato Feito</span>
                      <span className="font-bold text-[#F77F00] text-xl md:text-2xl flex-shrink-0">R$ 15</span>
                    </div>
                    <span className="text-xs md:text-sm text-zinc-500 block">Arroz, farofa, vinagrete e mandioca</span>
                  </div>
                  <div className="pb-4 border-b-2 border-zinc-800">
                    <div className="flex justify-between items-start gap-3 mb-1">
                      <span className="font-bold text-[#FFFFFF] text-base md:text-lg">Marmita</span>
                      <span className="font-bold text-[#F77F00] text-xl md:text-2xl flex-shrink-0">R$ 20</span>
                    </div>
                    <span className="text-xs md:text-sm text-zinc-500 block">Arroz, farofa, vinagrete e mandioca</span>
                  </div>
                </div>
              </Card>

              {/* Espetos Card */}
              <Card className="card-bbq p-6 md:p-8 lg:p-9 backdrop-blur-md w-full max-w-md md:max-w-none">
                <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                  <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full gradient-fire flex items-center justify-center shadow-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Flame className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-[#FFFFFF]" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-[#F77F00] uppercase">Espetos</h3>
                </div>
                <div className="space-y-4 md:space-y-5">
                  <div className="pb-4 border-b-2 border-zinc-800">
                    <div className="flex justify-between items-start gap-3 mb-1">
                      <span className="font-bold text-[#FFFFFF] text-base md:text-lg">Contra Filé</span>
                      <span className="font-bold text-[#F77F00] text-xl md:text-2xl flex-shrink-0">R$ 10</span>
                    </div>
                    <span className="text-xs md:text-sm text-zinc-500 block">100g</span>
                  </div>
                  <div className="pb-4 border-b-2 border-zinc-800">
                    <div className="flex justify-between items-start gap-3 mb-1">
                      <span className="font-bold text-[#FFFFFF] text-base md:text-lg">Franbacon</span>
                      <span className="font-bold text-[#F77F00] text-xl md:text-2xl flex-shrink-0">R$ 10</span>
                    </div>
                    <span className="text-xs md:text-sm text-zinc-500 block">100g</span>
                  </div>
                  <div className="pb-4 border-b-2 border-zinc-800">
                    <div className="flex justify-between items-start gap-3 mb-1">
                      <span className="font-bold text-[#FFFFFF] text-base md:text-lg">Coração</span>
                      <span className="font-bold text-[#F77F00] text-xl md:text-2xl flex-shrink-0">R$ 10</span>
                    </div>
                    <span className="text-xs md:text-sm text-zinc-500 block">100g</span>
                  </div>
                </div>
              </Card>

              {/* Bebidas Card */}
              <Card className="card-bbq p-6 md:p-8 lg:p-9 backdrop-blur-md w-full max-w-md md:max-w-none md:col-span-2 lg:col-span-1 md:mx-auto lg:mx-0">
                <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                  <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full gradient-fire flex items-center justify-center shadow-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-2xl md:text-3xl">🥤</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-[#F77F00] uppercase">Bebidas</h3>
                </div>
                <div className="space-y-4 md:space-y-5">
                  <div className="pb-4 border-b-2 border-zinc-800">
                    <div className="flex justify-between items-start gap-3 mb-1">
                      <span className="font-bold text-[#FFFFFF] text-base md:text-lg">Coca-Cola Normal</span>
                      <span className="font-bold text-[#F77F00] text-xl md:text-2xl flex-shrink-0">R$ 5</span>
                    </div>
                    <span className="text-xs md:text-sm text-zinc-500 block">310ml</span>
                  </div>
                  <div className="pb-4 border-b-2 border-zinc-800">
                    <div className="flex justify-between items-start gap-3 mb-1">
                      <span className="font-bold text-[#FFFFFF] text-base md:text-lg">Coca-Cola Zero</span>
                      <span className="font-bold text-[#F77F00] text-xl md:text-2xl flex-shrink-0">R$ 5</span>
                    </div>
                    <span className="text-xs md:text-sm text-zinc-500 block">310ml</span>
                  </div>
                  <div className="pb-4 border-b-2 border-zinc-800">
                    <div className="flex justify-between items-start gap-3 mb-1">
                      <span className="font-bold text-[#FFFFFF] text-base md:text-lg">Guaraná Antarctica</span>
                      <span className="font-bold text-[#F77F00] text-xl md:text-2xl flex-shrink-0">R$ 5</span>
                    </div>
                    <span className="text-xs md:text-sm text-zinc-500 block">350ml</span>
                  </div>
                  <div className="pb-4 border-b-2 border-zinc-800">
                    <div className="flex justify-between items-start gap-3 mb-1">
                      <span className="font-bold text-[#FFFFFF] text-base md:text-lg">Água com gás</span>
                      <span className="font-bold text-[#F77F00] text-xl md:text-2xl flex-shrink-0">R$ 5</span>
                    </div>
                    <span className="text-xs md:text-sm text-zinc-500 block">500ml</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* PIX Donation Section */}
      <section
        id="pix"
        className="relative bg-gradient-to-br from-[#0a0a0a] via-[#1A1A1A] to-[#0a0a0a] py-24 md:py-32 overflow-hidden section-divider-fire fire-overlay"
      >
        <div className="container mx-auto relative z-10 px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-3 bg-[#D62828]/15 border-2 border-[#D62828]/30 px-6 py-3 rounded-full mb-8">
              <Heart className="h-6 w-6 text-[#F77F00]" />
              <span className="text-[#F77F00] font-bold text-base uppercase tracking-widest">Apoie Nossa Turma</span>
            </div>

            <h2 className="mb-8 font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#FFFFFF] leading-none uppercase tracking-tight">
              Apoie Nossa <span className="gradient-text-fire">Formatura 2025</span>
            </h2>

            <p className="mb-14 text-pretty text-xl md:text-2xl leading-relaxed text-zinc-300 font-medium">
              Mesmo que você não possa estar presente no evento, sua ajuda faz toda a diferença! Cada doação via PIX nos
              aproxima do nosso sonho de formatura — um projeto feito com muito esforço, união e amor pelo que fazemos.
            </p>

            <Card className="card-bbq p-10 md:p-14 backdrop-blur-md">
              <div className="mb-10">
                <p className="text-[#F77F00] font-bold text-lg uppercase tracking-widest mb-6">Chave PIX</p>
                <div className="relative group">
                  <div className="absolute -inset-3 bg-gradient-to-r from-[#D62828] to-[#F77F00] rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition duration-300" />
                  <div className="relative rounded-3xl bg-gradient-to-br from-[#D62828] to-[#F77F00] p-8 shadow-2xl">
                    <p className="text-[#FFFFFF] font-bold text-4xl md:text-5xl lg:text-6xl tracking-wider font-display">
                      14673352661
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <Button
                    onClick={copyPixKey}
                    className={`gap-3 font-bold px-8 py-6 text-lg shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl ${
                      pixCopied
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : "gradient-fire text-[#FFFFFF] hover:shadow-[0_20px_50px_rgba(214,40,40,0.4)]"
                    }`}
                    size="lg"
                  >
                    {pixCopied ? (
                      <>
                        <Check className="h-5 w-5" />
                        Chave Copiada!
                      </>
                    ) : (
                      <>
                        <Copy className="h-5 w-5" />
                        Copiar Chave PIX
                      </>
                    )}
                  </Button>
                </div>
                <p className="text-base text-zinc-400 mt-6 font-medium">
                  Use essa chave diretamente no app do seu banco para contribuir
                </p>
              </div>

              <div className="mb-8 flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-3 bg-gradient-to-r from-[#D62828] to-[#F77F00] rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition duration-300" />
                  <div className="relative rounded-3xl bg-[#FFFFFF] p-6 shadow-2xl">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Qr%20code%20da%20doacao%20pix-whVmoh060fdAJeM5NU7PXwfyXXv1kp.jpg"
                      alt="QR Code PIX para doação"
                      width={280}
                      height={280}
                      className="w-64 h-64 md:w-72 md:h-72"
                    />
                  </div>
                </div>
              </div>

              <p className="text-lg text-zinc-400 mb-8 font-medium">
                Escaneie com o app do seu banco ou copie a chave acima
              </p>

              <div className="mt-10 p-8 bg-[#0a0a0a]/70 rounded-2xl border-2 border-[#F77F00]/30">
                <p className="text-[#F77F00] font-bold text-2xl mb-3 font-display uppercase">
                  Ajude, compartilhe e faça parte dessa conquista!
                </p>
                <p className="text-zinc-400 text-base font-medium">
                  Toda contribuição nos aproxima do nosso sonho de formatura
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="relative bg-[#1A1A1A] py-20 md:py-32 section-divider-fire pb-28 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-3 bg-[#F77F00]/15 border-2 border-[#F77F00]/30 px-6 py-3 rounded-full mb-8">
              <Phone className="h-6 w-6 text-[#F77F00]" />
              <span className="text-[#F77F00] font-bold text-base uppercase tracking-widest">Contato</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#FFFFFF] leading-none uppercase tracking-tight">
              Entre em <span className="gradient-text-fire">Contato</span>
            </h2>
            <p className="mt-6 text-zinc-400 text-xl max-w-2xl mx-auto font-medium">
              Estamos prontos para atender você e preparar seu pedido
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:gap-10 lg:grid-cols-2 justify-items-center lg:justify-items-stretch">
              <Card className="card-bbq p-8 md:p-10 lg:p-12 backdrop-blur-md w-full max-w-2xl lg:max-w-none">
                <h3 className="mb-8 md:mb-10 font-display text-3xl md:text-4xl font-bold text-[#FFFFFF] uppercase">
                  Informações
                </h3>

                <div className="space-y-6 md:space-y-8">
                  <div className="flex items-start gap-4 md:gap-5 group">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full gradient-fire flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-xl">
                      <MapPin className="h-7 w-7 md:h-8 md:w-8 text-[#FFFFFF]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#FFFFFF] text-lg md:text-xl mb-2">Endereço</p>
                      <p className="text-zinc-400 text-sm md:text-base">Av. Constelação, 1175</p>
                      <p className="text-zinc-400 text-sm md:text-base">Jardim Brasília, Uberlândia - MG</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 md:gap-5 group">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full gradient-fire flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-xl">
                      <Clock className="h-7 w-7 md:h-8 md:w-8 text-[#FFFFFF]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#FFFFFF] text-lg md:text-xl mb-2">Horário de Funcionamento</p>
                      <p className="text-zinc-400 text-sm md:text-base">9h às 13h</p>
                      <p className="text-sm md:text-base text-[#F77F00] font-bold mt-2">25 de outubro</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 md:gap-5 group">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full gradient-fire flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-xl">
                      <Phone className="h-7 w-7 md:h-8 md:w-8 text-[#FFFFFF]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#FFFFFF] text-lg md:text-xl mb-3">WhatsApp</p>
                      <a
                        href="https://wa.me/5534999075010"
                        className="block text-zinc-400 hover:text-[#F77F00] transition-colors font-bold mb-2 text-sm md:text-base"
                      >
                        (34) 99907-5010
                      </a>
                      <a
                        href="https://wa.me/5534997677712"
                        className="block text-zinc-400 hover:text-[#F77F00] transition-colors font-bold text-sm md:text-base"
                      >
                        (34) 99767-7712
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="card-bbq p-8 md:p-10 lg:p-12 backdrop-blur-md w-full max-w-2xl lg:max-w-none">
                <h3 className="mb-8 md:mb-10 font-display text-3xl md:text-4xl font-bold text-[#FFFFFF] uppercase">
                  Redes Sociais
                </h3>

                <div className="space-y-4 md:space-y-5 mb-8 md:mb-10">
                  <a
                    href="https://instagram.com/picanha_na.brasa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 md:gap-5 rounded-2xl border-2 border-[#F77F00]/30 bg-[#0a0a0a] p-5 md:p-6 transition-all hover:border-[#F77F00] hover:bg-[#0f0f0f] hover:scale-105 group"
                  >
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full gradient-fire flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl flex-shrink-0">
                      <Instagram className="h-7 w-7 md:h-8 md:w-8 text-[#FFFFFF]" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-[#FFFFFF] text-lg md:text-xl truncate">Instagram do Evento</p>
                      <p className="text-sm md:text-base text-zinc-400 truncate">@picanha_na.brasa</p>
                    </div>
                  </a>

                  <a
                    href="https://instagram.com/9anotalentos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 md:gap-5 rounded-2xl border-2 border-[#F77F00]/30 bg-[#0a0a0a] p-5 md:p-6 transition-all hover:border-[#F77F00] hover:bg-[#0f0f0f] hover:scale-105 group"
                  >
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full gradient-fire flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl flex-shrink-0">
                      <Instagram className="h-7 w-7 md:h-8 md:w-8 text-[#FFFFFF]" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-[#FFFFFF] text-lg md:text-xl truncate">Instagram da Turma</p>
                      <p className="text-sm md:text-base text-zinc-400 truncate">@9anotalentos</p>
                    </div>
                  </a>

                  <a
                    href="https://tiktok.com/@9anoofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 md:gap-5 rounded-2xl border-2 border-[#F77F00]/30 bg-[#0a0a0a] p-5 md:p-6 transition-all hover:border-[#F77F00] hover:bg-[#0f0f0f] hover:scale-105 group"
                  >
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full gradient-fire flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl flex-shrink-0">
                      <Send className="h-7 w-7 md:h-8 md:w-8 text-[#FFFFFF]" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-[#FFFFFF] text-lg md:text-xl truncate">TikTok da Turma</p>
                      <p className="text-sm md:text-base text-zinc-400 truncate">@9anoofficial</p>
                    </div>
                  </a>
                </div>

                <Button
                  className="w-full gap-3 gradient-fire text-[#FFFFFF] font-bold py-7 md:py-8 text-lg md:text-xl shadow-2xl hover:shadow-[0_20px_50px_rgba(214,40,40,0.4)] transition-all duration-300 hover:scale-105 rounded-xl"
                  size="lg"
                  asChild
                >
                  <a href="https://wa.me/5534999075010" target="_blank" rel="noopener noreferrer">
                    <Phone className="h-5 w-5 md:h-6 md:w-6" />
                    Fazer Pedido pelo WhatsApp
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-[#6B3E26] bg-gradient-to-b from-[#0a0a0a] to-[#1A1A1A] py-12 md:py-16 pb-20 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6 flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Picanha%20na%20Brasa-uA5Q6GNzrhnE7oiyTvb38b76cPwWHG.jpg"
                alt="Picanha na Brasa Logo"
                width={180}
                height={120}
                className="h-auto w-32 sm:w-36 md:w-40 opacity-90"
              />
            </div>
            <p className="text-sm md:text-base text-zinc-400 mb-3 font-medium px-4">
              © 2025 Picanha na Brasa - Projeto da Turma do 9º Ano do Colégio Talentos
            </p>
            <p className="text-xs md:text-sm text-zinc-600 px-4">
              Feira Gastronômica • Empreendedorismo • Formatura 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
