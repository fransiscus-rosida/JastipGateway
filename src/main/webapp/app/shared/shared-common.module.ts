import { NgModule } from '@angular/core';

import { JastipGatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JastipGatewaySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JastipGatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JastipGatewaySharedCommonModule {}
