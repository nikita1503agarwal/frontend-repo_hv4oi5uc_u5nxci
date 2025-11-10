import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', level: 90 },
  { name: 'Java', level: 80 },
  { name: 'C', level: 75 },
  { name: 'JavaScript', level: 85 },
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'Data Structures', level: 85 },
  { name: 'Algorithms', level: 80 },
  { name: 'Generative AI', level: 70 },
  { name: 'Data Visualization', level: 88 },
];

export default function Skills() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {skills.map((s) => (
        <div key={s.name} className="card-glass rounded-xl p-4 hover-glow">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-slate-100">{s.name}</span>
            <span className="text-sm text-slate-300">{s.level}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${s.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="h-full"
              style={{
                backgroundImage: 'linear-gradient(90deg, #6366f1, #8b5cf6, #d946ef)',
                boxShadow: '0 0 16px rgba(139,92,246,0.45)'
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
