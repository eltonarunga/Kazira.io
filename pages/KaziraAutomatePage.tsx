import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Brain, Shield, Database, Stethoscope, LineChart } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

const KaziraAutomatePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white text-black py-20 md:py-32 relative overflow-hidden border-b border-gray-200">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-gold/10 text-gold border border-gold/20 font-mono text-xs uppercase tracking-widest mb-6">
                FLAGSHIP PRODUCT
              </span>
              <h1 className="text-4xl md:text-6xl font-serif tracking-tight mb-6 text-black">
                Business Intelligence & Performance Analysis
              </h1>
              <p className="text-xl md:text-2xl text-black/50 mb-10 font-light leading-relaxed">
                We help clinics, healthcare organizations and consultancies turn fragmented operational data into clear performance insights, identify workflow gaps and prioritize practical improvements.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="https://kazira-io-clinical-intelligence-mvp.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="gold" className="w-full sm:w-auto text-lg px-8 py-4">
                    Launch Platform <ArrowRight className="ml-2 w-5 h-5 inline" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-6">Turning Operational Data Into Better Decisions</h2>
            <p className="text-lg text-black/50 font-light">
              Kazira combines structured analysis, operational intelligence and AI-enabled workflow design to help teams improve visibility, consistency and performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-8 border border-gold/20">
                <Database className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-2xl font-serif text-black mb-4">Operational Data Synthesis</h3>
              <p className="text-black/50 font-light leading-relaxed">
                Bring fragmented operational information into a clearer view so teams can understand activity, performance and bottlenecks.
              </p>
            </Card>

            <Card className="p-8">
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-8 border border-gold/20">
                <Brain className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-2xl font-serif text-black mb-4">Performance Analysis</h3>
              <p className="text-black/50 font-light leading-relaxed">
                Surface trends, exceptions and performance gaps that are difficult to identify through disconnected spreadsheets and manual reporting.
              </p>
            </Card>

            <Card className="p-8">
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-8 border border-gold/20">
                <Stethoscope className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-2xl font-serif text-black mb-4">Workflow Improvement</h3>
              <p className="text-black/50 font-light leading-relaxed">
                Translate findings into prioritized process improvements, automation opportunities and measurable operating goals.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-black mb-6">Ready to improve operational visibility and performance?</h2>
          <p className="text-xl text-black/50 font-light mb-10 max-w-2xl mx-auto">
            Explore the current prototype and discuss how business intelligence and workflow analysis can support your organization.
          </p>
          <a href="https://kazira-io-clinical-intelligence-mvp.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="gold" className="px-8 py-4 text-lg">
              Explore the Prototype
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default KaziraAutomatePage;
