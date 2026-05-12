import { Server, Zap, Wrench } from "lucide-react";

const SERVICES = [
  {
    title: "SaaS & MVP Systems",
    description:
      "Scalable backend foundations for SaaS products, startups, and internal platforms.",
    icon: Server,
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-cyan-500",
    beamClass: "via-cyan-500",
    features: [
      "Authentication Systems",
      "Scalable APIs",
      "Database Architecture",
      "File Upload Pipelines",
      "Admin Dashboards",
    ],
  },
  {
    title: "Realtime Infrastructure",
    description:
      "Low-latency systems for live collaboration, messaging, and async workflows.",
    icon: Zap,
    color: "from-purple-500/20 to-fuchsia-500/20",
    iconColor: "text-purple-500",
    beamClass: "via-purple-400",
    features: [
      "Realtime Messaging",
      "WebSocket Infrastructure",
      "Redis Pub/Sub",
      "Presence & Notifications",
      "Queue & Worker Systems",
    ],
  },
  {
    title: "Scaling & Optimization",
    description:
      "Backend optimization, bottleneck resolution, and architecture stabilization for growing products.",
    icon: Wrench,
    color: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-500",
    beamClass: "via-amber-500",
    features: [
      "Performance Optimization",
      "Architecture Refactoring",
      "Redis Optimization",
      "Async Processing",
      "API & Database Efficiency",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-28 bg-background overflow-hidden"
    >
      {/* Background Glow & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="mb-16 md:mb-24 max-w-3xl reveal">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
            Building Systems That Scale
          </h2>
          <div className="w-20 h-[4px] bg-gradient-to-r from-foreground to-transparent mb-8" />
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            I design and build scalable backend-heavy systems for engineering
            teams, startups, and businesses. From architecture and real-time
            infrastructure to async processing and performance optimization, I
            focus on creating systems that remain reliable as products grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="group relative flex flex-col p-8 rounded-xl border border-border bg-card/60 backdrop-blur-xl hover:bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 dark:hover:shadow-white/5 reveal"
              style={{ 
                ["--delay" as any]: `${index * 0.15}s`,
              }}
            >
              <div
                className={`h-14 w-14 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 shadow-inner`}
              >
                <service.icon className={`h-7 w-7 ${service.iconColor}`} />
              </div>

              <h3 className="text-xl lg:text-[1.35rem] font-bold text-foreground mb-4 tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-10 flex-grow leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-4">
                <div className="text-[11px] font-bold text-foreground uppercase tracking-widest mb-5 opacity-70">
                  Deliverables
                </div>
                {service.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <div
                      className={`mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${service.color} shrink-0`}
                    />
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground/90 transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
