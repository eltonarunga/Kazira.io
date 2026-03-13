import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Brain, Shield, Database, Stethoscope, LineChart } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

const KaziraAutomatePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-blue-900/50 text-blue-300 border border-blue-700 text-sm font-semibold tracking-wider mb-6">
                FLAGSHIP PRODUCT
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                Kazira.io Clinical Intelligence
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
                An advanced AI-powered platform for clinical data analysis and intelligence. Designed to streamline healthcare decision-making through synthesized insights.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="https://kazira-io-clinical-intelligence-mvp.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold px-8 py-4 text-lg border-4 border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-all w-full sm:w-auto">
                    Launch Platform <ArrowRight className="ml-2 w-5 h-5 inline" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transforming Healthcare with AI</h2>
            <p className="text-lg text-gray-600">
              Our clinical intelligence platform leverages cutting-edge machine learning to process complex medical data, providing actionable insights for healthcare professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-2 border-gray-100 hover:border-blue-500 transition-colors">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Database className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Synthesis</h3>
              <p className="text-gray-600">
                Automatically aggregate and synthesize vast amounts of clinical data from multiple sources into a unified, coherent view.
              </p>
            </Card>

            <Card className="p-8 border-2 border-gray-100 hover:border-blue-500 transition-colors">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Intelligent Analysis</h3>
              <p className="text-gray-600">
                Utilize advanced AI models to identify patterns, anomalies, and critical insights that might be missed by manual review.
              </p>
            </Card>

            <Card className="p-8 border-2 border-gray-100 hover:border-blue-500 transition-colors">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Stethoscope className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Clinical Decision Support</h3>
              <p className="text-gray-600">
                Empower healthcare providers with evidence-based recommendations to streamline decision-making and improve patient outcomes.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to experience the future of clinical intelligence?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Explore the Kazira.io Clinical Intelligence MVP and see how AI can revolutionize your clinical workflows.
          </p>
          <a href="https://kazira-io-clinical-intelligence-mvp.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 font-bold px-8 py-4 text-lg border-2 border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.5)] hover:scale-105 transition-all">
              Try the MVP Now
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default KaziraAutomatePage;
