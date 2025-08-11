#!/usr/bin/env node

/**
 * Simple deployment script for AI App Builder
 * This script helps prepare the application for production deployment
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 AI App Builder - Deployment Preparation');
console.log('==========================================');

// Check if required files exist
const requiredFiles = ['index.html', 'package.json', '.env', 'README.md'];
const missingFiles = [];

requiredFiles.forEach(file => {
    if (!fs.existsSync(file)) {
        missingFiles.push(file);
    }
});

if (missingFiles.length > 0) {
    console.log('❌ Missing required files:');
    missingFiles.forEach(file => console.log(`   - ${file}`));
    process.exit(1);
}

console.log('✅ All required files present');

// Read and validate index.html
const indexContent = fs.readFileSync('index.html', 'utf8');

// Check for key components
const checks = [
    { name: 'Monaco Editor CDN', pattern: /monaco-editor.*loader\.js/ },
    { name: 'OpenRouter API Integration', pattern: /openrouter\.ai\/api\/v1/ },
    { name: 'qwen3-coder Model', pattern: /qwen\/qwen3-coder:free/ },
    { name: 'Dark Theme Styling', pattern: /#0d1117/ },
    { name: 'AI Prompt Processing', pattern: /submitPrompt/ },
    { name: 'Project Management', pattern: /saveProject/ },
    { name: 'Live Preview System', pattern: /preview-iframe/ }
];

console.log('\n🔍 Validating Application Components:');
checks.forEach(check => {
    if (check.pattern.test(indexContent)) {
        console.log(`✅ ${check.name}`);
    } else {
        console.log(`❌ ${check.name}`);
    }
});

// Check file size
const stats = fs.statSync('index.html');
const fileSizeKB = Math.round(stats.size / 1024);
console.log(`\n📊 Application Size: ${fileSizeKB} KB`);

if (fileSizeKB > 500) {
    console.log('⚠️  Large file size - consider optimization for production');
} else {
    console.log('✅ File size is optimal');
}

// Create deployment package info
const deploymentInfo = {
    name: 'AI App Builder',
    version: '1.0.0',
    buildDate: new Date().toISOString(),
    fileSize: `${fileSizeKB} KB`,
    features: [
        'AI-powered code generation',
        'Monaco Editor integration',
        'Live preview system',
        'Project management',
        'Dark theme UI',
        'OpenRouter API integration'
    ],
    requirements: [
        'Modern web browser',
        'OpenRouter API key',
        'Internet connection'
    ]
};

fs.writeFileSync('deployment-info.json', JSON.stringify(deploymentInfo, null, 2));
console.log('\n✅ Deployment info created: deployment-info.json');

console.log('\n🎉 Deployment preparation complete!');
console.log('\nNext steps:');
console.log('1. Upload index.html to your web server');
console.log('2. Ensure HTTPS is enabled for API calls');
console.log('3. Configure CORS if needed');
console.log('4. Test with a valid OpenRouter API key');
console.log('\n🔗 Access your app at: http://localhost:3000');
