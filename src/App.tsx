/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  Mic, 
  MapPin, 
  Target, 
  Globe, 
  Zap, 
  Package, 
  Store, 
  ShoppingBag, 
  ShoppingCart, 
  CreditCard, 
  Plus,
  ArrowRight
} from "lucide-react";

const Slide = ({ children, id, notes }: { children: React.ReactNode; id: string; notes: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="slide-container mb-24" 
    id={id}
  >
    {/* Branding Overlay */}
    <div className="absolute top-8 right-12 z-30">
      <span className="font-display text-xl font-bold tracking-wider text-mondelez-gold opacity-80">
        MARSIL <span className="text-white font-light">ATACADISTA</span>
      </span>
    </div>

    <div className="glow w-[600px] h-[600px] bg-mondelez-purple-glow -top-[200px] -right-[100px]" />
    <div className="glow w-[600px] h-[600px] bg-mondelez-gold -bottom-[200px] -left-[100px]" />
    
    <div className="relative z-10 flex-grow flex flex-col justify-center">
      {children}
    </div>

    <div className="presenter-notes z-20">
      <Mic className="text-mondelez-gold w-5 h-5" />
      <p className="text-sm text-mondelez-lilas">
        <strong>Script:</strong> {notes}
      </p>
    </div>
  </motion.div>
);

const GlassCard = ({ children, className = "", style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) => (
  <div className={`glass-card p-10 text-center ${className}`} style={style}>
    {children}
  </div>
);

const ProgressBar = ({ label, value, max, percent }: { label: string; value: string; max?: string; percent: string }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2 font-semibold">
      <span>{label}</span>
      <span>{value}</span>
    </div>
    <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: percent }}
        transition={{ duration: 1, delay: 0.2 }}
        className="h-full bg-gradient-to-r from-mondelez-purple to-mondelez-lilas rounded-full" 
      />
    </div>
  </div>
);

export default function App() {
  return (
    <div className="flex flex-col items-center py-12 bg-bg-dark min-h-screen">
      
      {/* SLIDE 1: ABERTURA */}
      <Slide 
        id="s1" 
        notes="Bem-vindos ao JBP Marsil & Mondelez. Em 20 segundos: somos a potência logística que conecta sua marca a 425 cidades paulistas com eficiência máxima e capilaridade total."
      >
        <div className="mb-12">
          <h1 className="slide-title">Marsil em 20 Segundos</h1>
          <div className="accent-line" />
        </div>
        <div className="grid grid-cols-4 gap-5">
          <GlassCard>
            <span className="big-num">425</span>
            <span className="label-text">Cidades em SP</span>
          </GlassCard>
          <GlassCard className="border-t-4 border-t-mondelez-gold">
            <span className="big-num">98%</span>
            <span className="label-text">Bairros Capital</span>
          </GlassCard>
          <GlassCard>
            <span className="big-num">15</span>
            <span className="label-text">Mesorregiões</span>
          </GlassCard>
          <GlassCard>
            <span className="big-num">11k+</span>
            <span className="label-text">Posições Palete</span>
          </GlassCard>
        </div>
        <h3 className="mt-12 font-light text-3xl text-text-gray text-center">
          Sua marca, nossa infraestrutura. <span className="text-mondelez-gold font-semibold">Execução sem limites.</span>
        </h3>
      </Slide>

      {/* SLIDE 2: COBERTURA */}
      <Slide 
        id="s2" 
        notes="Nossa mancha de cobertura é cirúrgica. Dominamos 98% dos bairros da capital e estamos presentes em todas as 15 mesorregiões, garantindo que nenhum PDV fique de fora."
      >
        <div className="mb-12">
          <h1 className="slide-title">Presença Estratégica</h1>
          <div className="accent-line" />
        </div>
        <div className="grid grid-cols-[1fr_1.5fr] gap-12 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-5">
              <div className="text-mondelez-gold"><Target size={40} /></div>
              <div>
                <div className="text-3xl font-bold">425 Cidades</div>
                <div className="label-text">Atendimento Marsil</div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="text-mondelez-lilas"><MapPin size={40} /></div>
              <div>
                <div className="text-3xl font-bold">98% Capital</div>
                <div className="label-text">Domínio em SP City</div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="text-mondelez-purple-glow"><Globe size={40} /></div>
              <div>
                <div className="text-3xl font-bold">15 Mesorregiões</div>
                <div className="label-text">Estado de SP Completo</div>
              </div>
            </div>
          </div>
          <div className="glass-card h-[400px] p-0 overflow-hidden relative bg-white/5 border border-white/20">
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 0.8,
                scale: 1
              }}
              transition={{ duration: 1.5 }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Brazil_State_SaoPaulo.svg/1200px-Brazil_State_SaoPaulo.svg.png" 
              alt="Mapa do Estado de São Paulo" 
              className="w-full h-full object-contain p-10 invert brightness-200"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none bg-gradient-to-t from-bg-dark/60 via-transparent to-transparent">
              <div className="text-6xl font-extrabold text-mondelez-gold drop-shadow-[0_0_20px_rgba(225,135,25,0.8)]">SP MAP</div>
              <div className="label-text text-white font-bold">Visualização Territorial</div>
            </div>
            
            {/* Loading indicator overlay */}
            <motion.div 
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 2, delay: 1 }}
              className="absolute inset-0 bg-bg-dark/40 backdrop-blur-sm flex items-center justify-center pointer-events-none"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-2 border-mondelez-gold border-t-transparent rounded-full animate-spin" />
                <span className="text-[10px] uppercase tracking-widest text-mondelez-gold font-bold">Processando Dados</span>
              </div>
            </motion.div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 3: LOGÍSTICA */}
      <Slide 
        id="s3" 
        notes="Operamos 11.495 posições palete. Mais do que espaço, entregamos velocidade: 24 a 48 horas na Grande SP. Agilidade que se traduz em gôndola cheia."
      >
        <div className="mb-12">
          <h1 className="slide-title">Capacidade & SLA</h1>
          <div className="accent-line" />
        </div>
        <div className="grid grid-cols-[1.5fr_1fr] gap-10">
          <div>
            <ProgressBar label="CD SÃO PAULO" value="6.450 Paletes" percent="100%" />
            <ProgressBar label="CD GUARULHOS" value="3.000 Paletes" percent="46%" />
            <ProgressBar label="CD BORACÉIA" value="1.645 Paletes" percent="25%" />
            <ProgressBar label="CD VILA MARIA" value="400 Paletes" percent="6%" />
          </div>
          <div className="glass-card bg-mondelez-purple border-none p-10 flex flex-col items-center">
            <Zap className="text-mondelez-gold w-12 h-12 mb-5" />
            <h2 className="text-2xl font-bold mb-8">SLA DE ENTREGA</h2>
            <div className="text-left w-full flex flex-col gap-5">
              <div>
                <div className="label-text text-white/60">Capital & GSP</div>
                <div className="text-3xl font-bold">24h — 48h</div>
              </div>
              <div className="w-full h-px bg-white/10" />
              <div>
                <div className="label-text text-white/60">Interior</div>
                <div className="text-3xl font-bold">24h — 72h</div>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 4: GTM */}
      <Slide 
        id="s4" 
        notes="Nossa estratégia GTM não deixa espaços vazios. Do atacado pesado ao marketplace digital, garantimos a presença da Mondelez em todos os pontos de contato com o shopper."
      >
        <div className="mb-12">
          <h1 className="slide-title">Go-to-Market Omnichannel</h1>
          <div className="accent-line" />
        </div>
        <div className="grid grid-cols-5 gap-4">
          <GlassCard className="p-6">
            <Package className="text-mondelez-gold w-10 h-10 mx-auto mb-5" />
            <div className="font-bold mb-2">ATACADO</div>
            <p className="text-xs text-text-gray">Volume e escala logística.</p>
          </GlassCard>
          <GlassCard className="p-6">
            <Store className="text-mondelez-gold w-10 h-10 mx-auto mb-5" />
            <div className="font-bold mb-2">VAREJO</div>
            <p className="text-xs text-text-gray">Atendimento direto especializado.</p>
          </GlassCard>
          <GlassCard className="p-6 border-b-4 border-b-mondelez-gold">
            <ShoppingBag className="text-mondelez-gold w-10 h-10 mx-auto mb-5" />
            <div className="font-bold mb-2">LOJA</div>
            <p className="text-xs text-text-gray">Sortimento e experiência local.</p>
          </GlassCard>
          <GlassCard className="p-6">
            <ShoppingCart className="text-mondelez-gold w-10 h-10 mx-auto mb-5" />
            <div className="font-bold mb-2">MARKETPLACE</div>
            <p className="text-xs text-text-gray">Capilaridade digital infinita.</p>
          </GlassCard>
          <GlassCard className="p-6">
            <CreditCard className="text-mondelez-gold w-10 h-10 mx-auto mb-5" />
            <div className="font-bold mb-2">BALCÃO</div>
            <p className="text-xs text-text-gray">Pronta entrega e conveniência.</p>
          </GlassCard>
        </div>
      </Slide>

      {/* SLIDE 5: FORÇA DE VENDAS */}
      <Slide 
        id="s5" 
        notes="130 vendedores focados no sucesso do seu portfólio. Não são apenas tiradores de pedido, são consultores de negócio liderados por uma gestão orientada a dados."
      >
        <div className="mb-12">
          <h1 className="slide-title">Capital Humano & Execução</h1>
          <div className="accent-line" />
        </div>
        <div className="flex justify-around items-center gap-10">
          <GlassCard className="flex-1 py-16">
            <span className="text-[140px] font-bold text-mondelez-gold leading-none font-display">130</span>
            <div className="label-text text-2xl">Especialistas de Vendas</div>
          </GlassCard>
          <div className="text-6xl text-mondelez-gold"><Plus size={60} /></div>
          <GlassCard className="flex-1 py-16 border border-mondelez-gold">
            <span className="text-[140px] font-bold text-white leading-none font-display">5</span>
            <div className="label-text text-2xl text-mondelez-gold">Gerentes Estratégicos</div>
          </GlassCard>
        </div>
      </Slide>

      {/* SLIDE 6: CLUSTER & MIX */}
      <Slide 
        id="s6" 
        notes="Nossa clusterização 'Compras x Potencial' garante que o mix certo chegue ao lugar certo. De Trident a Bis, cada SKU tem uma estratégia de ativação definida."
      >
        <div className="mb-12">
          <h1 className="slide-title">Inteligência de Mix</h1>
          <div className="accent-line" />
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Top Performer", desc: "Alta Compra + Alto Potencial. Sortimento Full." },
              { title: "Desenvolvimento", desc: "Potencial Inexplorado. Foco em Positivação." },
              { title: "Manutenção", desc: "Giro Estabilizado. Gestão de Ruptura." },
              { title: "Nicho", desc: "Clientes Específicos. Foco em SKUs Core." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 p-6 rounded-2xl border-l-4 border-mondelez-gold">
                <h4 className="text-mondelez-gold font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-text-gray text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[
              "Trident", "Sonho de Valsa", "Ouro Branco", "Chiclets", 
              "Tang", "Laka / Diamante", "Bubbaloo", "Bis", "Trakinas"
            ].map((tag, i) => (
              <div key={i} className="bg-mondelez-purple/30 border border-mondelez-purple p-3 rounded-xl text-center font-medium text-sm">
                {tag}
              </div>
            ))}
            <div className="bg-mondelez-gold text-black p-3 rounded-xl text-center font-bold text-sm">
              Foco Total
            </div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 7: KPIS & PLANO */}
      <Slide 
        id="s7" 
        notes="Fechamos com transparência. Monitoramos KPIs em tempo real e propomos um rito de gestão de 90 dias para transformar esses números em crescimento real de sell-out."
      >
        <div className="mb-12">
          <h1 className="slide-title">Indicadores & Próximos Passos</h1>
          <div className="accent-line" />
        </div>
        <div className="grid grid-cols-3 gap-8 mb-10">
          <div className="border-b-2 border-mondelez-gold pb-2 font-semibold">Cobertura & Positivação</div>
          <div className="border-b-2 border-mondelez-gold pb-2 font-semibold">Mix por Cluster</div>
          <div className="border-b-2 border-mondelez-gold pb-2 font-semibold">Nível de Serviço (SLA)</div>
        </div>
        <GlassCard className="text-left p-10">
          <h2 className="text-mondelez-gold text-2xl font-bold mb-8">AGENDA JBP - 90 DIAS</h2>
          <div className="flex gap-10">
            <div className="flex-1">
              <span className="text-mondelez-gold font-bold text-2xl">01</span>
              <p className="mt-3 text-sm text-text-gray">Diagnóstico profundo por Canal e Clusterização de Mix.</p>
            </div>
            <div className="flex-1">
              <span className="text-mondelez-gold font-bold text-2xl">02</span>
              <p className="mt-3 text-sm text-text-gray">Implementação do Plano de Execução Trade e Metas Mensais.</p>
            </div>
            <div className="flex-1">
              <span className="text-mondelez-gold font-bold text-2xl">03</span>
              <p className="mt-3 text-sm text-text-gray">Rito de Gestão Mensal: Revisão de Indicadores e Ajuste Fino.</p>
            </div>
          </div>
        </GlassCard>
      </Slide>

      {/* SLIDE 8: BI DASHBOARD */}
      <Slide 
        id="s8" 
        notes="Gerenciamos cada centavo e cada SKU com nossa solução de BI proprietária. Acompanhamos vendas por Canal, Cliente, SKU e Categoria em tempo real, garantindo que a meta Marsil e Mondelez seja atingida com precisão cirúrgica."
      >
        <div className="mb-6">
          <h1 className="slide-title">Gestão de Dados (BI)</h1>
          <div className="accent-line" />
        </div>
        
        {/* Mock BI Dashboard */}
        <div className="bg-[#121212] rounded-xl border border-white/10 overflow-hidden flex flex-col h-[480px] text-[10px]">
          {/* BI Header */}
          <div className="bg-black/40 px-4 py-2 flex gap-4 border-b border-white/5">
            {["Home", "Resumo", "Fornecedor", "Categoria", "Anual", "Diário", "Comprador", "Canal"].map((tab, i) => (
              <span key={i} className={`cursor-pointer ${tab === "Diário" ? "text-mondelez-gold border-b border-mondelez-gold" : "text-white/40"}`}>{tab}</span>
            ))}
          </div>
          
          <div className="p-4 flex flex-col gap-4 overflow-hidden">
            {/* Top Stats */}
            <div className="grid grid-cols-6 gap-2">
              <div className="bg-white/5 p-2 rounded border border-white/10 text-center">
                <div className="text-mondelez-gold text-xl font-bold">4</div>
                <div className="text-[8px] text-white/40 uppercase">Dias Restantes</div>
              </div>
              <div className="bg-white/5 p-2 rounded border border-white/10 text-center col-span-2">
                <div className="text-emerald-500 text-lg font-bold">R$ 6.071.726 <span className="text-[10px]">✓</span></div>
                <div className="text-[8px] text-white/40 uppercase">Sell Out 25 x 26 (+5,06%)</div>
              </div>
              <div className="bg-white/5 p-2 rounded border border-white/10 text-center col-span-2">
                <div className="text-emerald-500 text-lg font-bold">R$ 7.589.658 <span className="text-[10px]">✓</span></div>
                <div className="text-[8px] text-white/40 uppercase">Projeção vs Meta (+9,44%)</div>
              </div>
              <div className="bg-white/5 p-2 rounded border border-white/10 text-center">
                <div className="text-white text-xl font-bold">425</div>
                <div className="text-[8px] text-white/40 uppercase">Cobertura</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="bg-white/5 p-3 rounded border border-white/10">
              <div className="flex justify-between mb-1 text-[8px] uppercase text-white/60">
                <span>Sell Out Vs Meta Marsil</span>
                <span>R$ 6.935.25K</span>
              </div>
              <div className="w-full h-4 bg-black/40 rounded-sm overflow-hidden relative">
                <div className="h-full bg-emerald-600 w-[87%]" />
                <div className="absolute top-0 right-[13%] h-full w-0.5 bg-red-500" />
              </div>
            </div>

            {/* Table */}
            <div className="flex-grow overflow-auto bg-white/5 rounded border border-white/10">
              <table className="w-full text-left border-collapse">
                <thead className="sticky top-0 bg-[#1a1a1a] text-[8px] uppercase text-white/60 border-b border-white/10">
                  <tr>
                    <th className="p-2">Fornecedor</th>
                    <th className="p-2">Meta</th>
                    <th className="p-2">Sell Out 25</th>
                    <th className="p-2">Sell Out 26</th>
                    <th className="p-2">% Atingido</th>
                    <th className="p-2">Status</th>
                  </tr>
                </thead>
                <tbody className="text-[9px]">
                  {[
                    { name: "CHICLE", meta: "0,20", s25: "1.592.952", s26: "2.260.558", perc: "118%", status: "bg-emerald-500" },
                    { name: "CHOCOLATE", meta: "0,20", s25: "1.487.270", s26: "1.372.148", perc: "77%", status: "bg-amber-500" },
                    { name: "BISCOITO", meta: "0,20", s25: "1.137.071", s26: "1.050.763", perc: "77%", status: "bg-amber-500" },
                    { name: "DROPS", meta: "0,20", s25: "866.199", s26: "686.358", perc: "66%", status: "bg-amber-500" },
                    { name: "SAZONAL PASCOA", meta: "0,20", s25: "331.876", s26: "410.442", perc: "103%", status: "bg-emerald-500" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                      <td className="p-2 font-bold text-white/80">{row.name}</td>
                      <td className="p-2 text-white/40">{row.meta}</td>
                      <td className="p-2 text-white/60">R$ {row.s25}</td>
                      <td className="p-2 text-white/90">R$ {row.s26}</td>
                      <td className="p-2 text-emerald-400">{row.perc}</td>
                      <td className="p-2"><div className={`w-2 h-2 rounded-full ${row.status}`} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Slide>

      {/* Navigation Helper */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-2 z-50">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
          <button 
            key={num}
            onClick={() => document.getElementById(`s${num}`)?.scrollIntoView({ behavior: 'smooth' })}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-mondelez-gold hover:text-black transition-colors flex items-center justify-center font-bold text-xs border border-white/20"
          >
            {num}
          </button>
        ))}
      </div>

    </div>
  );
}
