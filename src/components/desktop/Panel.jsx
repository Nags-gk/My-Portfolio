'use client';
import { motion } from 'framer-motion';

/**
 * A static content panel styled like an OS window, without window behavior.
 * No drag, no minimize/maximize/close — the desktop layout is fixed, so
 * pretending these are draggable/closable would be a fake affordance.
 */
const Panel = ({ id, title, area, dark, index = 0, children }) => (
  <motion.section
    id={id}
    aria-label={title}
    className={`panel ${dark ? 'panel-dark' : ''}`}
    style={{ gridArea: area }}
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.4), ease: [0.23, 1, 0.32, 1] }}
  >
    <div className="panel-bar">
      <span className="panel-name">{title}</span>
    </div>
    <div className="panel-content">{children}</div>
  </motion.section>
);

export default Panel;
