import jobApplicationRouter from './jobApplication-route.js'
import profileManagementRouter from './profileManagement-route.js'
import jobOfferingRouter from './jobOffering-route.js'
import interviewSchedulingRouter from './interviewScheduling-route.js'
import dataAnalysisRouter from './dataAnalysis-routing.js'
import userAuthenticationRouter from './userRegistration-route.js'
import compatibilityRouter from './jobSkillMatching-route.js'

export default(app)  =>{

    app.use('/application', jobApplicationRouter);
    app.use('/profile', profileManagementRouter);
    app.use('/jobOfferings', jobOfferingRouter);
    app.use('/interviewScheduling', interviewSchedulingRouter);
    app.use('/dataAnalysis', dataAnalysisRouter);
    app.use('/Registration', userAuthenticationRouter);
    app.use('/compatibility', compatibilityRouter);
}
