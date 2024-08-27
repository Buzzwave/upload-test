import { FormControl } from '@angular/forms';

export interface ISocialPostForm {
    postText: FormControl<string>;
    postImageUrl: FormControl<string>;
    postForwardUrl: FormControl<string | null>;
}