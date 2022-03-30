// https://www.terraform.io/docs/providers/cloudinit/r/config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/r/config#base64_encode Config#base64_encode}
  */
  readonly base64Encode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/r/config#boundary Config#boundary}
  */
  readonly boundary?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/r/config#gzip Config#gzip}
  */
  readonly gzip?: boolean | cdktf.IResolvable;
  /**
  * part block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/r/config#part Config#part}
  */
  readonly part: ConfigPart[] | cdktf.IResolvable;
}
export interface ConfigPart {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/r/config#content Config#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/r/config#content_type Config#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/r/config#filename Config#filename}
  */
  readonly filename?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/r/config#merge_type Config#merge_type}
  */
  readonly mergeType?: string;
}

export function configPartToTerraform(struct?: ConfigPart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    filename: cdktf.stringToTerraform(struct!.filename),
    merge_type: cdktf.stringToTerraform(struct!.mergeType),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudinit/r/config cloudinit_config}
*/
export class Config extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudinit_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudinit/r/config cloudinit_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudinit_config',
      terraformGeneratorMetadata: {
        providerName: 'cloudinit',
        providerVersion: '2.2.0',
        providerVersionConstraint: '~> 2.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._base64Encode = config.base64Encode;
    this._boundary = config.boundary;
    this._gzip = config.gzip;
    this._part = config.part;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base64_encode - computed: false, optional: true, required: false
  private _base64Encode?: boolean | cdktf.IResolvable; 
  public get base64Encode() {
    return this.getBooleanAttribute('base64_encode');
  }
  public set base64Encode(value: boolean | cdktf.IResolvable) {
    this._base64Encode = value;
  }
  public resetBase64Encode() {
    this._base64Encode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64EncodeInput() {
    return this._base64Encode;
  }

  // boundary - computed: false, optional: true, required: false
  private _boundary?: string; 
  public get boundary() {
    return this.getStringAttribute('boundary');
  }
  public set boundary(value: string) {
    this._boundary = value;
  }
  public resetBoundary() {
    this._boundary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundaryInput() {
    return this._boundary;
  }

  // gzip - computed: false, optional: true, required: false
  private _gzip?: boolean | cdktf.IResolvable; 
  public get gzip() {
    return this.getBooleanAttribute('gzip');
  }
  public set gzip(value: boolean | cdktf.IResolvable) {
    this._gzip = value;
  }
  public resetGzip() {
    this._gzip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipInput() {
    return this._gzip;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rendered - computed: true, optional: false, required: false
  public get rendered() {
    return this.getStringAttribute('rendered');
  }

  // part - computed: false, optional: false, required: true
  private _part?: ConfigPart[] | cdktf.IResolvable; 
  public get part() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('part');
  }
  public set part(value: ConfigPart[] | cdktf.IResolvable) {
    this._part = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partInput() {
    return this._part;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base64_encode: cdktf.booleanToTerraform(this._base64Encode),
      boundary: cdktf.stringToTerraform(this._boundary),
      gzip: cdktf.booleanToTerraform(this._gzip),
      part: cdktf.listMapper(configPartToTerraform)(this._part),
    };
  }
}
