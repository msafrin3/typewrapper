<?php

namespace App\Http\Requests\Parish;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        $request = request();
        $parish = request()->parish;
        return [
            'state_id' => 'required',
            'district_id' => 'required',
            'name' => [
                'required',
                Rule::unique('dd_parishes')->where('state_id', $request->input('state_id'))->where('district_id', $request->input('district_id'))->ignore($parish->id)
            ]
        ];
    }

    public function messages()
    {
        return [
            'state_id.required' => 'Ruangan negeri wajib diisi',
            'district_id.required' => 'Ruangan daerah wajib diisi',
            'name.required' => 'Ruangan mukim wajib diisi',
            'name.unique' => 'Nama mukim telah wujud'
        ];
    }
}
